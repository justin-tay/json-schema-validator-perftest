window.BENCHMARK_DATA = {
  "lastUpdate": 1758174122686,
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
          "id": "8a6476add459c00575b3506aff27f0a97e6bbee4",
          "message": "Add benchmark action",
          "timestamp": "2025-09-18T11:38:07+08:00",
          "tree_id": "d67551ca3f43917ee0e935dca66651ec408ecad0",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/8a6476add459c00575b3506aff27f0a97e6bbee4"
        },
        "date": 1758167029271,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 1544.552569221867,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4032.9140711025684,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3290.668409645034,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 452.9061552002401,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3198.9820914772936,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4125.407289476615,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 433.2357371526494,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 1683.7045052008655,
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
          "id": "f37d6e3df4eb68ed874fc72ce98b0dd31841a650",
          "message": "1.1.0",
          "timestamp": "2025-09-18T11:45:34+08:00",
          "tree_id": "e4ddfbe65180cb27a10d5950dbb7cd6050a96c07",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/f37d6e3df4eb68ed874fc72ce98b0dd31841a650"
        },
        "date": 1758167426981,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 1391.6995693586257,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4146.416566098863,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3265.0864604590192,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 438.4266587483512,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3241.7204507387173,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4012.2107488979946,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 454.7834967857163,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 1497.1073924442628,
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
          "id": "68e5bff5d534cf3d3b2ce9380f83b82cc54bb901",
          "message": "1.2.0",
          "timestamp": "2025-09-18T11:50:59+08:00",
          "tree_id": "70861a87adbf7976638722958dc86459ccae5505",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/68e5bff5d534cf3d3b2ce9380f83b82cc54bb901"
        },
        "date": 1758167787532,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 3205.708825349478,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4008.6531890164847,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3177.776248522506,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 409.9383251225375,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3184.782963717218,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4008.6531890164847,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 449.82242663098253,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 3402.3186101938886,
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
          "id": "a4e48c0ab17617888f0290e5a472f368e88f6ae5",
          "message": "1.3.0",
          "timestamp": "2025-09-18T13:28:20+08:00",
          "tree_id": "0ef2993d5445291e90dddab529fe3fb9ca6f9b4a",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/a4e48c0ab17617888f0290e5a472f368e88f6ae5"
        },
        "date": 1758173584322,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 3253.0915861816065,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3980.2288370735514,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3141.108253806544,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 405.1510328542317,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3249.865690071751,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4129.665372211578,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 450.48924502387416,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 3404.861388190482,
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
          "id": "063f6f88cb678711bc97812532d0b9e129444844",
          "message": "1.3.1",
          "timestamp": "2025-09-18T13:37:23+08:00",
          "tree_id": "452b56832ac3f2035099619d87608e81b84403c2",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/063f6f88cb678711bc97812532d0b9e129444844"
        },
        "date": 1758174122345,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 6179.20045750157,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4159.572406638002,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3261.2077826987866,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 467.7100409818811,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3342.895893330704,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4003.044661536773,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 452.24763811387135,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 6537.9537702383195,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}