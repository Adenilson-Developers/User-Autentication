const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requre: true,
    },

    tasks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    },

    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;