window.BENCHMARK_DATA = {
  "lastUpdate": 1760580828655,
  "repoUrl": "https://github.com/justin-tay/json-schema-validator-perftest",
  "entries": {
    "JSON Schema Validator Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49700559+justin-tay@users.noreply.github.com",
            "name": "Justin Tay",
            "username": "justin-tay"
          },
          "committer": {
            "email": "49700559+justin-tay@users.noreply.github.com",
            "name": "Justin Tay",
            "username": "justin-tay"
          },
          "distinct": true,
          "id": "35e8de9e64b958d1d4eac71cb3cbd07ce03fa698",
          "message": "Add Cql2",
          "timestamp": "2025-10-16T09:30:07+08:00",
          "tree_id": "5b90bba0ab7e8cdacc21423fd66bdf8334384c40",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/35e8de9e64b958d1d4eac71cb3cbd07ce03fa698"
        },
        "date": 1760579070758,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"networknt\"} )",
            "value": 332.293340569792,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"devHarrel\"} )",
            "value": 294.4513082547316,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 49.36470923493113,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"optimumCode\"} )",
            "value": 134.22492978076696,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"networknt\"} )",
            "value": 15113.25402253196,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"devHarrel\"} )",
            "value": 12149.285100927307,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1732.0574349033604,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"optimumCode\"} )",
            "value": 3963.258460965712,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"networknt\"} )",
            "value": 981.6873052403142,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"devHarrel\"} )",
            "value": 405.92543586239486,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 45.611832078770895,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"optimumCode\"} )",
            "value": 458.1756951917749,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"networknt\"} )",
            "value": 198307.10539751453,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"devHarrel\"} )",
            "value": 192151.90442435816,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 39684.58004734827,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"optimumCode\"} )",
            "value": 180673.58691658266,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"networknt\"} )",
            "value": 9402.472161951255,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"everit\"} )",
            "value": 3140.471803447108,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3004.8411613890216,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 441.5509986384366,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"optimumCode\"} )",
            "value": 3720.9983165796016,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"networknt\"} )",
            "value": 9019.643597504077,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"everit\"} )",
            "value": 6589.25869204247,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"devHarrel\"} )",
            "value": 3777.5918923242043,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1249.9476215336801,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49700559+justin-tay@users.noreply.github.com",
            "name": "Justin Tay",
            "username": "justin-tay"
          },
          "committer": {
            "email": "49700559+justin-tay@users.noreply.github.com",
            "name": "Justin Tay",
            "username": "justin-tay"
          },
          "distinct": true,
          "id": "e0e62db8579265e4913aa571d3253e316f74fbd1",
          "message": "Add benchmark action and implementations",
          "timestamp": "2025-10-16T09:59:18+08:00",
          "tree_id": "5b90bba0ab7e8cdacc21423fd66bdf8334384c40",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/e0e62db8579265e4913aa571d3253e316f74fbd1"
        },
        "date": 1760580827808,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"networknt\"} )",
            "value": 321.14669828459483,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"devHarrel\"} )",
            "value": 293.3318639205782,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 49.29989060695987,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"optimumCode\"} )",
            "value": 132.6722660752874,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"networknt\"} )",
            "value": 14562.338687425368,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"devHarrel\"} )",
            "value": 11848.196070148382,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1720.3298130961064,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"optimumCode\"} )",
            "value": 4032.88863492742,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"networknt\"} )",
            "value": 976.7579564881898,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"devHarrel\"} )",
            "value": 388.0636574906269,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 43.74349622905462,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"optimumCode\"} )",
            "value": 479.92238137914615,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"networknt\"} )",
            "value": 195369.53352152125,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"devHarrel\"} )",
            "value": 193676.58458291204,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 39769.12112297651,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"optimumCode\"} )",
            "value": 184961.0811033675,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"networknt\"} )",
            "value": 9150.824108547271,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"everit\"} )",
            "value": 3034.9646026688874,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 2975.0640899083023,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 443.120453086891,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"optimumCode\"} )",
            "value": 3736.7363743189267,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"networknt\"} )",
            "value": 8824.722636289936,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"everit\"} )",
            "value": 6680.163100306004,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"devHarrel\"} )",
            "value": 3802.447511928709,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1240.7454737941855,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}