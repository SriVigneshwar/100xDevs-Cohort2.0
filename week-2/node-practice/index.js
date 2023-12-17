const express = require ('express');

const app = express();

app.use(express.json());


var users = [{
    name: 'Viki',
    kidneys: [{
        healthy: false
    }]
}];


app.get("/", function(req, res){
  const kidneys = users[0].kidneys;
  const numberOfKidneys = kidneys.length;
  let numberOfHealthyKidneys = 0;
  for(i=0; i < numberOfKidneys; i++){
    if(kidneys[i].healthy){
        numberOfHealthyKidneys += 1;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys
  });
});

app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Kidney Added"
    });
});

app.put('/', function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});


app.delete('/', function(req, res){
    const newKidneys= [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({});
});

app.listen('3000');