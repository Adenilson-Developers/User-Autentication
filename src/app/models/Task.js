const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const TaskSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },

    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project',
        require: true,
    },

    completed: {
        type: Boolean,
        require: true,
        default: false,
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },

    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;