//api.js
const express = require('express');
const router = express.Router();

const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require('../Controllers/blogController');

// Define routes for blogs
router.get('/blogs/create', createBlog);
router.get('/blogs/read', readBlog);
router.get('/blogs/delete', deleteBlog);
router.get('/blogs/update', updateBlog);

// Add similar routes for other controllers

module.exports = router;
