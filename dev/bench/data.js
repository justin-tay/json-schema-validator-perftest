window.BENCHMARK_DATA = {
  "lastUpdate": 1760584287843,
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
          "id": "5306cb3c68908544ef2635889a30d84533ee8aaa",
          "message": "Add benchmark action and implementations",
          "timestamp": "2025-10-16T10:44:31+08:00",
          "tree_id": "379337c05049a364bce0ec42297fc1ece4fc958f",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/5306cb3c68908544ef2635889a30d84533ee8aaa"
        },
        "date": 1760583535461,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"networknt\"} )",
            "value": 347.6647717258699,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"devHarrel\"} )",
            "value": 292.3478767565693,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 50.03834290630488,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"optimumCode\"} )",
            "value": 133.86238860928052,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"networknt\"} )",
            "value": 15046.764743394955,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"devHarrel\"} )",
            "value": 11512.908998476212,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1702.854148314189,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"optimumCode\"} )",
            "value": 3809.2882844267465,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"networknt\"} )",
            "value": 1007.2736724331343,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"devHarrel\"} )",
            "value": 383.9738398280994,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 43.04416808512524,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"optimumCode\"} )",
            "value": 450.2025484240519,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"networknt\"} )",
            "value": 196197.1820969351,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"devHarrel\"} )",
            "value": 184835.49885982974,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 37158.55570907561,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"optimumCode\"} )",
            "value": 184841.34118867604,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"networknt\"} )",
            "value": 9427.632530781573,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"everit\"} )",
            "value": 3047.6978553414788,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 2655.621743670821,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 438.76061642814165,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"optimumCode\"} )",
            "value": 3773.8281171681338,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"networknt\"} )",
            "value": 8663.097384677772,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"everit\"} )",
            "value": 7223.9319256389235,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"devHarrel\"} )",
            "value": 3705.3948251371316,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1217.074443191601,
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
          "id": "fd9152758eb2d23b833984d7e30c6f961f259d79",
          "message": "Add benchmark action and implementations",
          "timestamp": "2025-10-16T10:48:24+08:00",
          "tree_id": "d3915432fafacac8e384d61b63bb4c268b897ca7",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/fd9152758eb2d23b833984d7e30c6f961f259d79"
        },
        "date": 1760583767493,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"networknt\"} )",
            "value": 335.7646541571053,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"devHarrel\"} )",
            "value": 295.91823537455866,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 49.222441726120614,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"optimumCode\"} )",
            "value": 133.46103747268884,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"networknt\"} )",
            "value": 14447.925816030302,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"devHarrel\"} )",
            "value": 12116.67249158983,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1718.7637017332515,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"optimumCode\"} )",
            "value": 3990.6160937459154,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"networknt\"} )",
            "value": 990.7316688764904,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"devHarrel\"} )",
            "value": 412.80335452141793,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 46.02958841518919,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"optimumCode\"} )",
            "value": 460.6398037062297,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"networknt\"} )",
            "value": 193202.8338351265,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"devHarrel\"} )",
            "value": 184319.53196349923,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 39098.409409176405,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"optimumCode\"} )",
            "value": 187656.91181698776,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"networknt\"} )",
            "value": 7922.165700122573,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"everit\"} )",
            "value": 3048.8210851691633,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 2947.3806489943677,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 416.68281100156565,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"optimumCode\"} )",
            "value": 3824.3443386385175,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"networknt\"} )",
            "value": 8569.83576638359,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"everit\"} )",
            "value": 6829.756215270824,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"devHarrel\"} )",
            "value": 3784.6509342191453,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1245.8541721676454,
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
          "id": "9d09344c1bab8fdcfb573570d73554ab7aaa4b4d",
          "message": "Add benchmark action and implementations",
          "timestamp": "2025-10-16T10:57:04+08:00",
          "tree_id": "e236b6529d0e6bb7d9ed0a22735c15c74b232799",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/9d09344c1bab8fdcfb573570d73554ab7aaa4b4d"
        },
        "date": 1760584287366,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"networknt\"} )",
            "value": 327.0926195381453,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"devHarrel\"} )",
            "value": 292.1844317712369,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 49.87272458369656,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2 ( {\"implementation\":\"optimumCode\"} )",
            "value": 144.61652200263003,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"networknt\"} )",
            "value": 14766.343927758526,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"devHarrel\"} )",
            "value": 11813.75062582265,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1718.3924682424288,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_cql2_fix ( {\"implementation\":\"optimumCode\"} )",
            "value": 3848.9039411126155,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"networknt\"} )",
            "value": 1001.1419976010311,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"devHarrel\"} )",
            "value": 413.4296646484906,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 43.526599714047,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_openapi ( {\"implementation\":\"optimumCode\"} )",
            "value": 438.52146520659466,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"networknt\"} )",
            "value": 198433.60120824224,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"devHarrel\"} )",
            "value": 190927.3588318903,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 39452.31566131862,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft2020_12_unevaluatedProperties ( {\"implementation\":\"optimumCode\"} )",
            "value": 173935.22253921692,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"networknt\"} )",
            "value": 9267.71572516891,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"everit\"} )",
            "value": 2969.7398903697526,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 2752.066020896947,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 421.83021291358864,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft4_basic ( {\"implementation\":\"optimumCode\"} )",
            "value": 3844.290302575893,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"networknt\"} )",
            "value": 9172.756166267553,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"everit\"} )",
            "value": 6725.309437131015,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"devHarrel\"} )",
            "value": 3922.641906662366,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.draft7_krakend ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 1180.1080192073994,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}