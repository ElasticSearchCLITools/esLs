# esLs
List indexes and statistics  (think of the ls command or dir command, just for elasticsearch)
by default esLs shows value "num_docs" where ever it occurs in the JSON response
```
#./esLs
indices.std-2015.10.17.docs.num_docs=2226
indices.std-2015.10.17.shards.0.0.docs.num_docs=1158
indices.std-2015.10.17.shards.1.0.docs.num_docs=1068
indices.stdout-2015.10.17.docs.num_docs=2
indices.stdout-2015.10.17.shards.0.0.docs.num_docs=1
indices.stdout-2015.10.17.shards.1.0.docs.num_docs=1
```

Specitying your own keys
```
./esLs.js --field="total|num_docs|size_in_bytes" 
_shards.total=4
indices.std-2015.10.17.merges.total=0
indices.std-2015.10.17.refresh.total=2
indices.std-2015.10.17.flush.total=4
indices.std-2015.10.17.shards.0.0.merges.total=0
indices.std-2015.10.17.shards.0.0.refresh.total=1
indices.std-2015.10.17.shards.0.0.flush.total=2
indices.std-2015.10.17.shards.1.0.merges.total=0
indices.std-2015.10.17.shards.1.0.refresh.total=1
indices.std-2015.10.17.shards.1.0.flush.total=2
indices.stdout-2015.10.17.merges.total=0
indices.stdout-2015.10.17.refresh.total=2
indices.stdout-2015.10.17.flush.total=4
indices.stdout-2015.10.17.shards.0.0.merges.total=0
indices.stdout-2015.10.17.shards.0.0.refresh.total=1
indices.stdout-2015.10.17.shards.0.0.flush.total=2
indices.stdout-2015.10.17.shards.1.0.merges.total=0
indices.stdout-2015.10.17.shards.1.0.refresh.total=1
indices.stdout-2015.10.17.shards.1.0.flush.total=2
indices.std-2015.10.17.docs.num_docs=2226
indices.std-2015.10.17.shards.0.0.docs.num_docs=1158
indices.std-2015.10.17.shards.1.0.docs.num_docs=1068
indices.stdout-2015.10.17.docs.num_docs=2
indices.stdout-2015.10.17.shards.0.0.docs.num_docs=1
indices.stdout-2015.10.17.shards.1.0.docs.num_docs=1
indices.std-2015.10.17.index.size_in_bytes=242768
indices.std-2015.10.17.shards.0.0.index.size_in_bytes=135077
indices.std-2015.10.17.shards.1.0.index.size_in_bytes=107691
indices.stdout-2015.10.17.index.size_in_bytes=7283
indices.stdout-2015.10.17.shards.0.0.index.size_in_bytes=3702
indices.stdout-2015.10.17.shards.1.0.index.size_in_bytes=3581
```

Lots of flags 
```
~/esCLITools/esLs$ ./esLs.js --field="total|num_docs|size_in_bytes" --response --raw
{
  "_shards": {
    "total": 4,
    "successful": 4,
    "failed": 0
  },
  "indices": {
    "std-2015.10.17": {
      "index": {
        "primary_size_in_bytes": 242768,
        "size_in_bytes": 242768
      },
      "translog": {
        "operations": 0
      },
      "docs": {
        "num_docs": 2226,
        "max_doc": 2226,
        "deleted_docs": 0
      },
      "merges": {
        "current": 0,
        "current_docs": 0,
        "current_size_in_bytes": 0,
        "total": 0,
        "total_time_in_millis": 0,
        "total_docs": 0,
        "total_size_in_bytes": 0
      },
      "refresh": {
        "total": 2,
        "total_time_in_millis": 0
      },
      "flush": {
        "total": 4,
        "total_time_in_millis": 22
      },
      "shards": {
        "0": [
          {
            "routing": {
              "state": "STARTED",
              "primary": true,
              "node": "hnhjlFBPQbaAegAzf9sBHw",
              "relocating_node": null,
              "shard": 0,
              "index": "std-2015.10.17"
            },
            "state": "STARTED",
            "index": {
              "size_in_bytes": 135077
            },
            "translog": {
              "id": 1445105244820,
              "operations": 0
            },
            "docs": {
              "num_docs": 1158,
              "max_doc": 1158,
              "deleted_docs": 0
            },
            "merges": {
              "current": 0,
              "current_docs": 0,
              "current_size_in_bytes": 0,
              "total": 0,
              "total_time_in_millis": 0,
              "total_docs": 0,
              "total_size_in_bytes": 0
            },
            "refresh": {
              "total": 1,
              "total_time_in_millis": 0
            },
            "flush": {
              "total": 2,
              "total_time_in_millis": 12
            }
          }
        ],
        "1": [
          {
            "routing": {
              "state": "STARTED",
              "primary": true,
              "node": "Si3TEPLSSGitlmpoEKyuJA",
              "relocating_node": null,
              "shard": 1,
              "index": "std-2015.10.17"
            },
            "state": "STARTED",
            "index": {
              "size_in_bytes": 107691
            },
            "translog": {
              "id": 1445105244638,
              "operations": 0
            },
            "docs": {
              "num_docs": 1068,
              "max_doc": 1068,
              "deleted_docs": 0
            },
            "merges": {
              "current": 0,
              "current_docs": 0,
              "current_size_in_bytes": 0,
              "total": 0,
              "total_time_in_millis": 0,
              "total_docs": 0,
              "total_size_in_bytes": 0
            },
            "refresh": {
              "total": 1,
              "total_time_in_millis": 0
            },
            "flush": {
              "total": 2,
              "total_time_in_millis": 10
            }
          }
        ]
      }
    },
    "stdout-2015.10.17": {
      "index": {
        "primary_size_in_bytes": 7283,
        "size_in_bytes": 7283
      },
      "translog": {
        "operations": 0
      },
      "docs": {
        "num_docs": 2,
        "max_doc": 2,
        "deleted_docs": 0
      },
      "merges": {
        "current": 0,
        "current_docs": 0,
        "current_size_in_bytes": 0,
        "total": 0,
        "total_time_in_millis": 0,
        "total_docs": 0,
        "total_size_in_bytes": 0
      },
      "refresh": {
        "total": 2,
        "total_time_in_millis": 0
      },
      "flush": {
        "total": 4,
        "total_time_in_millis": 4
      },
      "shards": {
        "0": [
          {
            "routing": {
              "state": "STARTED",
              "primary": true,
              "node": "Si3TEPLSSGitlmpoEKyuJA",
              "relocating_node": null,
              "shard": 0,
              "index": "stdout-2015.10.17"
            },
            "state": "STARTED",
            "index": {
              "size_in_bytes": 3702
            },
            "translog": {
              "id": 1445117561257,
              "operations": 0
            },
            "docs": {
              "num_docs": 1,
              "max_doc": 1,
              "deleted_docs": 0
            },
            "merges": {
              "current": 0,
              "current_docs": 0,
              "current_size_in_bytes": 0,
              "total": 0,
              "total_time_in_millis": 0,
              "total_docs": 0,
              "total_size_in_bytes": 0
            },
            "refresh": {
              "total": 1,
              "total_time_in_millis": 0
            },
            "flush": {
              "total": 2,
              "total_time_in_millis": 2
            }
          }
        ],
        "1": [
          {
            "routing": {
              "state": "STARTED",
              "primary": true,
              "node": "hnhjlFBPQbaAegAzf9sBHw",
              "relocating_node": null,
              "shard": 1,
              "index": "stdout-2015.10.17"
            },
            "state": "STARTED",
            "index": {
              "size_in_bytes": 3581
            },
            "translog": {
              "id": 1445117561117,
              "operations": 0
            },
            "docs": {
              "num_docs": 1,
              "max_doc": 1,
              "deleted_docs": 0
            },
            "merges": {
              "current": 0,
              "current_docs": 0,
              "current_size_in_bytes": 0,
              "total": 0,
              "total_time_in_millis": 0,
              "total_docs": 0,
              "total_size_in_bytes": 0
            },
            "refresh": {
              "total": 1,
              "total_time_in_millis": 0
            },
            "flush": {
              "total": 2,
              "total_time_in_millis": 2
            }
          }
        ]
      }
    }
  }
}
[
  {
    "path": "_shards.total",
    "value": 4
  },
  {
    "path": "indices.std-2015.10.17.merges.total",
    "value": 0
  },
  {
    "path": "indices.std-2015.10.17.refresh.total",
    "value": 2
  },
  {
    "path": "indices.std-2015.10.17.flush.total",
    "value": 4
  },
  {
    "path": "indices.std-2015.10.17.shards.0.0.merges.total",
    "value": 0
  },
  {
    "path": "indices.std-2015.10.17.shards.0.0.refresh.total",
    "value": 1
  },
  {
    "path": "indices.std-2015.10.17.shards.0.0.flush.total",
    "value": 2
  },
  {
    "path": "indices.std-2015.10.17.shards.1.0.merges.total",
    "value": 0
  },
  {
    "path": "indices.std-2015.10.17.shards.1.0.refresh.total",
    "value": 1
  },
  {
    "path": "indices.std-2015.10.17.shards.1.0.flush.total",
    "value": 2
  },
  {
    "path": "indices.stdout-2015.10.17.merges.total",
    "value": 0
  },
  {
    "path": "indices.stdout-2015.10.17.refresh.total",
    "value": 2
  },
  {
    "path": "indices.stdout-2015.10.17.flush.total",
    "value": 4
  },
  {
    "path": "indices.stdout-2015.10.17.shards.0.0.merges.total",
    "value": 0
  },
  {
    "path": "indices.stdout-2015.10.17.shards.0.0.refresh.total",
    "value": 1
  },
  {
    "path": "indices.stdout-2015.10.17.shards.0.0.flush.total",
    "value": 2
  },
  {
    "path": "indices.stdout-2015.10.17.shards.1.0.merges.total",
    "value": 0
  },
  {
    "path": "indices.stdout-2015.10.17.shards.1.0.refresh.total",
    "value": 1
  },
  {
    "path": "indices.stdout-2015.10.17.shards.1.0.flush.total",
    "value": 2
  }
]
[
  {
    "path": "indices.std-2015.10.17.docs.num_docs",
    "value": 2226
  },
  {
    "path": "indices.std-2015.10.17.shards.0.0.docs.num_docs",
    "value": 1158
  },
  {
    "path": "indices.std-2015.10.17.shards.1.0.docs.num_docs",
    "value": 1068
  },
  {
    "path": "indices.stdout-2015.10.17.docs.num_docs",
    "value": 2
  },
  {
    "path": "indices.stdout-2015.10.17.shards.0.0.docs.num_docs",
    "value": 1
  },
  {
    "path": "indices.stdout-2015.10.17.shards.1.0.docs.num_docs",
    "value": 1
  }
]
[
  {
    "path": "indices.std-2015.10.17.index.size_in_bytes",
    "value": 242768
  },
  {
    "path": "indices.std-2015.10.17.shards.0.0.index.size_in_bytes",
    "value": 135077
  },
  {
    "path": "indices.std-2015.10.17.shards.1.0.index.size_in_bytes",
    "value": 107691
  },
  {
    "path": "indices.stdout-2015.10.17.index.size_in_bytes",
    "value": 7283
  },
  {
    "path": "indices.stdout-2015.10.17.shards.0.0.index.size_in_bytes",
    "value": 3702
  },
  {
    "path": "indices.stdout-2015.10.17.shards.1.0.index.size_in_bytes",
    "value": 3581
  }
]
```



