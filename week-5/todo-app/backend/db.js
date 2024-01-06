const mongoose = require('mongoose');

// mongodb+srv://admin:YK9P8xlTCpu3pGgC@cluster0.j9lngy4.mongodb.net/todos

mongoose.connect('mongodb+srv://admin:YK9P8xlTCpu3pGgC@cluster0.j9lngy4.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}