// 1: Has “FED” or “FS” positions available



db.collection.find({
  "record.positions": {
    "$in": [
      "FS",
      "FED"
    ]
  }
},
{
  "record.team": 1
},
)

// 2: Require at least 3 years of experience

db.collection.find({
  "record.years_min": {
    "$gt": 2
  }
},
{
  "record.team": 1
},
)

// 3: Has at least 3 positions. ** for some reason $expr wasn't recognized in Mongodb playground

db.collection.find({
  "record.positions": {
    $expr: {
      $size: {
        $gt: [
          3
        ]
      }
    }
  }
},
{
  "record.team": 1
},
)