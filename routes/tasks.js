const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

function ensureAuth(req, res, next) {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

//=============================================================================

// GET all tasks and render to page
router.get('/', async (req, res) => {
  // Redirect unauthenticated users to login
  if (!req.oidc.isAuthenticated()) {
    return res.redirect('/login');
  }

  console.log('Logged in as:', req.oidc.user.name); // Debug user info

  const tasks = await Task.find().sort({ createdAt: -1 });

  res.render('index', {
    tasks,
    user: req.oidc.user // pass user to view (optional)
  });
});

// POST new task
router.post('/add', ensureAuth, async (req, res) => {
  const { title } = req.body;
  if (title) {
    await Task.create({ title });
  }
  res.redirect('/');
});

// DELETE a task
router.post('/delete/:id', ensureAuth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

// TOGGLE task done/undone
router.post('/toggle/:id', ensureAuth, async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.isDone = !task.isDone;
  await task.save();
  res.redirect('/');
});

module.exports = router;
