window.BENCHMARK_DATA = {
  "lastUpdate": 1758180299072,
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
          "id": "612482e228e8792f49f3f78e18b5e5ccb5a08810",
          "message": "1.3.2",
          "timestamp": "2025-09-18T14:59:19+08:00",
          "tree_id": "9e41b79f7e592c9936604b4a7bf70459da061fc3",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/612482e228e8792f49f3f78e18b5e5ccb5a08810"
        },
        "date": 1758179059236,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 6703.997178531571,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4190.229760444028,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3252.9419919133397,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 398.782876243283,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3276.5868267270293,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 3949.292442929301,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 449.46167289884744,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 7006.654361945332,
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
          "id": "8063d7368d9470e24926d839f06942068173b815",
          "message": "1.3.3",
          "timestamp": "2025-09-18T15:06:54+08:00",
          "tree_id": "e3f8b99f9123526f8d30504e17f8f8bb39981675",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/8063d7368d9470e24926d839f06942068173b815"
        },
        "date": 1758179523082,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7072.009981945932,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3970.5465503969986,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3229.7318047331387,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 406.1137015718896,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3223.3011983117153,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4166.338900857755,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 452.28144764056105,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 7394.643960803328,
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
          "id": "5c0fa3aa8366b09aa3904df3fdde6241258ed06f",
          "message": "1.4.0",
          "timestamp": "2025-09-18T15:14:06+08:00",
          "tree_id": "7d6608f204d9d79d78127f146bc4468e0f3f6454",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/5c0fa3aa8366b09aa3904df3fdde6241258ed06f"
        },
        "date": 1758179937026,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 6934.976332467636,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4232.047505919306,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3244.6718666349225,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 429.2559226636601,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3214.4383318562336,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4084.2402234932683,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 447.5743409197284,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 7524.948343116754,
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
          "id": "cc239ee81f156ed2786487fe79c9b86dd492ee84",
          "message": "1.4.1",
          "timestamp": "2025-09-18T15:20:05+08:00",
          "tree_id": "32f1c8454027567bb2419f0364757993bebffab0",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/cc239ee81f156ed2786487fe79c9b86dd492ee84"
        },
        "date": 1758180298597,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7758.997639145084,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3897.074346074125,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3167.452947689411,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 395.5737632946443,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3232.084432322709,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4070.7665044347937,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 444.3105897150044,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8237.852183998397,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}