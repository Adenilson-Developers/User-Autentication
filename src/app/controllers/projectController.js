const express = require('express');

const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async(req, res) => {

    try{
        const projects = await Project.find().populate(['user', 'tasks'])

        res.send({ projects })
    }catch(err){
        res.status(400).send({ error: 'Error loading project'})
    }
});




router.get('/:projectId', async(req, res) => {

    try{
        
        const project = await project.findById(req.params.projectId).populate(['user', 'tasks']);

        return res.send({ project })

    }catch(err){
        res.status(400).send({ error: 'Error loading project'})
    }
});

router.post('/', async( req, res) =>{
    try{

        const { title, description, tasks } = req.body;
        const project = await Project.create({title, description, tasks, user: req.userId});

        await Promise.all(tasks.map( async task => {
            const projectTask = new Task({ ...task, project: project._id});

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({ project });

    }catch(err){
        res.status(400).send({error: 'Error create new project'})
    }
})

router.put('/:projectId', async(req, res)=>{
    try{

        const { title, description, tasks } = req.body;
        const project = await project.findByIdUpdate(req.params.projectId, {
            title,
            description
        }, { new: true });

        project.tasks = [];
        await Task.remove({ project: Project._id });
        await Promise.all(tasks.map( async task => {
            const projectTask = new Task({...task, project: Project._id })

            await projectTask.save();

            project.tasks.push(projectTask)
        }));

        await project.save();

        return res.send({ project })


    }catch(err){
        return res.status(400).send({ error: 'Error update project'})
    }
});

router.delete('/:projectId', async(req, res) => {

    try{

        await Project.findByIdAndRemove(req.params.projectId);

        return res.send();

    }catch(err){
        res.status(400).send({error: 'Error delete project'})
    }
})


module.exports = app => app.use('/projects', router);