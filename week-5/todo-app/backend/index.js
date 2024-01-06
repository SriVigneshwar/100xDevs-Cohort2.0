const express = require('express');
const { createtodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post('/todo', async function(req, res){
    const createPayload = req.body;
    const parsePayload = createtodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg: 'You sent wrong inputs'
        });
        return;
    }
    // put it in mongoDB

    await todo.Create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
});

app.get('/todos', async function(req, res){
    // get al todos
    const todos = await todo.find();

    res.json({
        todos
    });
});

app.put('/completed',async function(req, res){
    const updatePayload  = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'You sent wrong inputs'
        });
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    });

    res.json({
        msg: 'To marked as completed'
    });
});


app.listen('3000');