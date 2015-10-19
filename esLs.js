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
console.info = function (){};
var hostport="localhost:9200"
// set loglevel
var loglevel="error"
// show field
var field="docs.num_docs"
var rawoutput = false
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
	console.log("\t[--raw default:false ]");
        process.exit(1)
    }
    if(val === "--pretty" ){
	pretty=true;
    }
    if(val === "--raw" ){
	rawoutput=true;
    }
    if(val.indexOf('=') >0){
        var s = val.split(/=/);
        console.info(s[0] + ' : ' + s[1]); 
        if (s[0] === "--url" ){
            url=s[1];
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
function getProperty(obj,f){
    if( f.indexOf(".")>0){
	fn = /(\w+)\.(.+)$/.exec(f)
	return getProperty(obj[fn[1]],fn[2]);	
    }
    return obj[f];
		
}
// Main search
	console.info("Running search".blue);
	client.indices.status(function (err, response, status){
		if ( err != undefined ){
			console.log("ERR".red+err.red);
		}
		if ( response != undefined ){
			if (rawoutput){
				console.log(JSON.stringify(response,null,2));
			}
			//console.log("RESPONSE".red+JSON.stringify(response.indices,null,2).yellow)
			for (var key in response.indices) {
				var fs = field.split(/\|/)
				for (var i in fs){
				    console.log(key+"."+fs[i]+"="+getProperty(response.indices[key],fs[i]))
				}
			}
		}
		console.info("STAT: ".red+JSON.stringify(status,null,2).blue)
	})

