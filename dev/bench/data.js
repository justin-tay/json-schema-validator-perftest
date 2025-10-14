window.BENCHMARK_DATA = {
  "lastUpdate": 1760406108794,
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
          "id": "257cab5546af3ff2e7dff18b4332f5dcebe205f2",
          "message": "1.4.2",
          "timestamp": "2025-09-18T15:26:36+08:00",
          "tree_id": "614be5c21555b333a0e1127901dfed5089e996e0",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/257cab5546af3ff2e7dff18b4332f5dcebe205f2"
        },
        "date": 1758180677988,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7514.303757823532,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4110.422838826014,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3130.2730553583024,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 409.9207518146746,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3289.590885470636,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4175.983056052149,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 452.0976175613623,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8179.657631061564,
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
          "id": "15e05e9b5c0fb66deeff983fa3ae1730c2764074",
          "message": "1.4.3",
          "timestamp": "2025-09-18T15:32:50+08:00",
          "tree_id": "a2170db94894554f0dfc5ee66171c514f01afd98",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/15e05e9b5c0fb66deeff983fa3ae1730c2764074"
        },
        "date": 1758181052362,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7774.208231335212,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3997.61454308796,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3139.9281660021675,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 404.02365971187504,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3294.324029587993,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4138.734208278347,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 444.374861975712,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8303.994312339795,
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
          "id": "d17770a4c7e84a7debe1bc468ad640687cabd4d0",
          "message": "1.5.0",
          "timestamp": "2025-09-18T15:38:54+08:00",
          "tree_id": "6f31c850195c592bdf545e289da3c0f6eaddc218",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/d17770a4c7e84a7debe1bc468ad640687cabd4d0"
        },
        "date": 1758181422519,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7494.662822142593,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4134.167884734937,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3170.622428353416,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 421.73716960223334,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3174.870082264675,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4102.621646156047,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 439.86059308582867,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8108.0358464813335,
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
          "id": "0d8646b056b9cf3564d47e8d8c9a42eca1c5e044",
          "message": "1.5.1",
          "timestamp": "2025-09-18T15:45:01+08:00",
          "tree_id": "7f417812df7d24f77d68b06d4855f9860b2b35c5",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/0d8646b056b9cf3564d47e8d8c9a42eca1c5e044"
        },
        "date": 1758181782562,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7709.050550581836,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3996.586989392427,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3302.224482000272,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 406.48908466280415,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3183.1473041785516,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4102.296584674478,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 442.3598227555676,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8233.845361728165,
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
          "id": "5dcde7a9539d62e7a20d257af9322c3817dc6a67",
          "message": "1.5.2",
          "timestamp": "2025-09-18T15:50:50+08:00",
          "tree_id": "94108b5d102d47199cb68aa00c1ee68129a7da95",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/5dcde7a9539d62e7a20d257af9322c3817dc6a67"
        },
        "date": 1758182138218,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7683.903387427724,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4237.8974238316905,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3195.175311715373,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 449.12517649833535,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3215.855730921556,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4077.7932916437026,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 452.4467127996611,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 7862.985134407776,
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
          "id": "60c421efcbf29024f4f28dbc7ec072cacaa4a024",
          "message": "1.5.3",
          "timestamp": "2025-09-18T15:56:33+08:00",
          "tree_id": "2f53004ee270000d8e6cb03b8eef306938d8a510",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/60c421efcbf29024f4f28dbc7ec072cacaa4a024"
        },
        "date": 1758182483493,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7625.41352642492,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4037.666503109293,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3167.1709894113706,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 421.0519588419352,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3295.7989653637565,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 3968.5220729557936,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 450.9798333773926,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8251.526725262533,
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
          "id": "e41011bd9e0d08d621abb38df534c933f1e9478f",
          "message": "1.5.4",
          "timestamp": "2025-09-18T16:02:57+08:00",
          "tree_id": "7ba097b55096733524cfb746061961d10114db44",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/e41011bd9e0d08d621abb38df534c933f1e9478f"
        },
        "date": 1758182869864,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7452.752095032574,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3936.3110677709024,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3150.0640079777136,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 404.2069286717665,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3213.52024038663,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 3959.0761268889787,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 453.5667421846897,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8191.212951853945,
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
          "id": "58392d3f5320da50d2470f22dcc730b981da3002",
          "message": "1.5.5",
          "timestamp": "2025-09-18T16:09:13+08:00",
          "tree_id": "2bb840d8e7900ebfbc39be81db594cb792285b43",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/58392d3f5320da50d2470f22dcc730b981da3002"
        },
        "date": 1758183245231,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7559.3455593120425,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4079.160255708875,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3294.0152838071276,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 448.7525462763327,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3195.0779975344944,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4195.715908255251,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 451.3950199943679,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8277.503777160024,
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
          "id": "7ddef9d5e2e0a3087e7df01dd8eace30d1d1ff7d",
          "message": "1.5.6",
          "timestamp": "2025-09-18T16:15:04+08:00",
          "tree_id": "376f3f751269d91fa2bdf21a0e6b943aca95fbe7",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/7ddef9d5e2e0a3087e7df01dd8eace30d1d1ff7d"
        },
        "date": 1758183583353,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7725.355352908774,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4084.85561422956,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3155.73287887062,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 409.16682206514406,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3202.6206961959965,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 3995.416167246413,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 445.2180351481754,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8241.100851450783,
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
          "id": "0245e861a210d2d528b48eb9fb8c6823142478c9",
          "message": "1.5.7",
          "timestamp": "2025-09-18T16:21:28+08:00",
          "tree_id": "ac1739e1d6f19c9392f06ccd09845f0185756395",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/0245e861a210d2d528b48eb9fb8c6823142478c9"
        },
        "date": 1758183973344,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7692.253539189986,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4183.461174067299,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3116.137788173883,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 432.40158477947676,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3259.9305228397993,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 3980.3052418708235,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 449.41322406269956,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8180.770616493181,
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
          "id": "b116a55672251f5d458d3f29df1dbad3321e0a89",
          "message": "1.5.8",
          "timestamp": "2025-09-18T16:30:09+08:00",
          "tree_id": "fe2889cfee47dbd7568b58e504567e32402dc41c",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/b116a55672251f5d458d3f29df1dbad3321e0a89"
        },
        "date": 1758184492844,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7466.29220387684,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4187.631682872879,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3251.189628815199,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 451.7040371910832,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3279.077950810925,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4058.7768287299473,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 428.276855973159,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8327.841652407573,
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
          "id": "fef3c57be3b3a0d893c390a435c397354ff418e5",
          "message": "1.5.9",
          "timestamp": "2025-09-18T16:38:39+08:00",
          "tree_id": "4071a2a2fc6295fe54a29b0ed4a6ed431f6c7651",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/fef3c57be3b3a0d893c390a435c397354ff418e5"
        },
        "date": 1758185000550,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7780.737348323589,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4187.505251655634,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3161.9767767886824,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 408.9477438729043,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3271.1365119928473,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4145.743958286131,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 447.0807486616398,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8079.699263506755,
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
          "id": "bfd2f3df220131fef43a94d2daa4d2a37db8cd1a",
          "message": "Add benchmark action",
          "timestamp": "2025-09-18T17:38:21+08:00",
          "tree_id": "bf2b07553058c3d19910260004e59aedcbcb8e56",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/bfd2f3df220131fef43a94d2daa4d2a37db8cd1a"
        },
        "date": 1758188585717,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 1564.4051621984484,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4062.9295238465675,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3256.697183100257,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 421.27439889844203,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3208.269655634813,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4083.415766171736,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 453.19768694043046,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 1599.8835004723533,
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
          "id": "ae3e1c637bfd670d5931639bae92e46d151d2c98",
          "message": "update gitignore",
          "timestamp": "2025-10-13T17:18:49+08:00",
          "tree_id": "a193b97053445408c5751ed1262fa0adfef39e4a",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/ae3e1c637bfd670d5931639bae92e46d151d2c98"
        },
        "date": 1760347439486,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 1545.2640870242994,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4210.681857679164,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3279.6248337552715,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 455.3948741395197,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3303.6474318874098,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4104.045520863784,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 429.54729504693665,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 1678.7483849330517,
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
          "id": "bfd2f3df220131fef43a94d2daa4d2a37db8cd1a",
          "message": "Add benchmark action",
          "timestamp": "2025-09-18T17:38:21+08:00",
          "tree_id": "bf2b07553058c3d19910260004e59aedcbcb8e56",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/bfd2f3df220131fef43a94d2daa4d2a37db8cd1a"
        },
        "date": 1760353312235,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 1564.3465481417516,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 4206.511124584294,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3287.151497225448,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 445.3794235018434,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3211.803473370363,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4045.1851450830113,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 447.2589466166121,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 1686.1166925814468,
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
          "id": "381bf1621a7b578000f4f0795777f658b2157dec",
          "message": "Add benchmark action",
          "timestamp": "2025-10-13T19:15:33+08:00",
          "tree_id": "79e6e37a24a00780c005a2df0656740c080318c4",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/381bf1621a7b578000f4f0795777f658b2157dec"
        },
        "date": 1760354568986,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7382.965209537967,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3949.4051081251932,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3154.7303202864055,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 407.1926192563008,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"optimumCode\"} )",
            "value": 3998.1915645725985,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3138.8678459964226,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 3988.900390206431,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 426.7929658040414,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8231.77080917955,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.OptimumCodeBenchmark.basic",
            "value": 3889.2040928138354,
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
          "id": "0b7e090a7d97054a17b97214815fa2a341a90559",
          "message": "parameterize",
          "timestamp": "2025-10-14T09:36:10+08:00",
          "tree_id": "f0e94dbf373dab76abf25167c11a922b50dbf80a",
          "url": "https://github.com/justin-tay/json-schema-validator-perftest/commit/0b7e090a7d97054a17b97214815fa2a341a90559"
        },
        "date": 1760406108449,
        "tool": "jmh",
        "benches": [
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"networknt\"} )",
            "value": 7586.423425029061,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"everit\"} )",
            "value": 3937.3331519092776,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"devHarrel\"} )",
            "value": 3132.6017349728354,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"jsonSchemaFriend\"} )",
            "value": 404.0079262395955,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.ComparisonBenchmark.basic ( {\"implementation\":\"optimumCode\"} )",
            "value": 3984.168589354602,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.DevHarrelBenchmark.basic",
            "value": 3160.5775833376338,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.EveritBenchmark.basic",
            "value": 4031.2762466972126,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.JsonSchemaFriendBenchmark.basic",
            "value": 427.6911527238699,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.NetworkntBenchmark.basic",
            "value": 8276.672237482386,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "com.networknt.schema.perftest.OptimumCodeBenchmark.basic",
            "value": 3954.698047000535,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}