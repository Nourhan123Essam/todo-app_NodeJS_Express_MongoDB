const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks and render to page
router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.render('index', { tasks });
});

// POST new task
router.post('/add', async (req, res) => {
  const { title } = req.body;
  if (title) {
    await Task.create({ title });
  }
  res.redirect('/');
});

// DELETE a task
router.post('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

// TOGGLE task done/undone
router.post('/toggle/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.isDone = !task.isDone;
  await task.save();
  res.redirect('/');
});

module.exports = router;
