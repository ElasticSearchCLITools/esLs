#!/usr/bin/env node
/**************************************************
**
** Requirements
**
***************************************************/
var elasticsearch = require('elasticsearch');
var colour = require('colour')
var listindexes=true;
var jsonPath = require('JSONPath');

/**************************************************
**
** Varables
**
***************************************************/
// Disable Info messages
//console.info = function (){};
var hostport="localhost:9200"
// set loglevel
var loglevel="error"
// show field
//var field="docs.num_docs"
var field="count"
var rawoutput = false
var showresponse = false
/***************************************************
**
** Setup
**
***************************************************/
/*******************************
**
** Process Command Line 
**
********************************/
console.info("Processing Commandline arguments");
process.argv.forEach(function (val, ind, array) {
    if(/^(-h|--help|-\?)$/.test(val) ){
        console.log(process.argv[0]+":");
        console.log("\t[--hostport="+hostport+"]");
        console.log("\t[--fetchsize='20'  default: 100 ");
        console.log("\t[--pretty  default: 0 ");
	console.log("\t[--fields='"+field+"']");
	console.log("\t[--raw default:false ] return a JSON formated result");
	console.log("\t[--response default:false ] show the Elasticsearch response in json ");
        process.exit(1)
    }
    if(val === "--pretty" ){
	pretty=true;
    }
    if(val === "--raw" ){
	rawoutput=true;
    }
    if(val === "--response" ){
	showreponse=true;
    }
    if(val.indexOf('=') >0){
        var s = val.split(/=/);
        console.info(s[0] + ' : ' + s[1]); 
        if (s[0] === "--hostport" ){
            hostport=s[1];
        }
	if (s[0] === "--loglevel" ){
	    loglevel = s[1];
	}
	if (s[0] === "--field" ){
	    field = s[1];
	}
    }
});
// Open the Elasticsearch Connection
var client = new elasticsearch.Client({
  host: hostport,
  protocol: 'http',
  index: "_all",
  ignore: [404],
  log: loglevel,
  suggestCompression: true
});
/**************************************************
**
** Test Connection make sure it is available
**
***************************************************/
client.ping({
  requestTimeout: 1000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster maybe down!');
    process.exit(1);
  }else{
    console.info('Connected to Elasticsearch cluster.')	
  } 
});

/********************************************************************************
**
** Functions
**
*********************************************************************************/
function searchObj( obj, string, path ){
    var ret = [];
    for( var key in obj ) {
        if(path === undefined )  p = key ;
        else p = path+"."+key ;
        
        if( typeof obj[key] === 'object' ){
             //console.log("++"+ret.toString());
             r=searchObj( obj[key],string,p );
             if ( r.length > 0 ) {
                ret = ret.concat(r)
             }
        }
        if( key == string ){
            o = { path: p, value: obj[key] };
            //console.log(o)
            ret.push(o);
            
        }
    }
    return ret;
}

// Main search
	console.info("Running search".blue);
	client.indices.stats(function (err, response, status){
		if ( response != undefined ){
			//console.log(response)
			if (showresponse) console.log(JSON.stringify(response,null,2));
			var fs = field.split(/\|/)
			for (var i in fs){
			    r=searchObj(response,fs[i])
			    console.log(r);
			    if ( rawoutput ) console.log(JSON.stringify(r,null,2)) 
			    else r.forEach( function ( key ){ console.log(key.path.red+"="+key.value)})
			}
		}
	})

