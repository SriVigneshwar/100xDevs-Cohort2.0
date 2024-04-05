import express from "express";
import {VALUE} from "@repo/common/config"
 
const app = express();

app.get('/', (req,res)=>{
    console.log(VALUE);
    res.json({
        message: 'Hello world!'
    });
});

app.listen(3000);