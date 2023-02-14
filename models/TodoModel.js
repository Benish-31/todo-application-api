const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    isCompleted: {
        type: Boolean
    },
    dateCreated: {
        type: String
    },
    userId: {
        type: String
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;