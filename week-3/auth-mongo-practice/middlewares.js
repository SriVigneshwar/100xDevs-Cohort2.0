const express = require('express');

const app = express();

app.use(express.json());


app.get('healthcheckup/', (req, res)=>{
    
    const kidneyId = req.query.kidneyid;
    const username = req.headers.username;
    const password = req.headers.password;

    if(! (username == 'Viki' && password == '12345')){
        res.status(403).json({
            msg: 'wrong credentials'
        });
        return;
    }
    if(! (kidneyId != 1 && password != 2)){
        res.status(411).json({
            msg: 'invalid kidney'
        });
        return;
    }

    res.status(200).send('Kidney is healthy');
});

app.listen('3000');
