window.BENCHMARK_DATA = {
  "lastUpdate": 1758167427444,
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
      }
    ]
  }
}