const express = require('express');

const { getStudents } = require('../controllers/studentController');

const router = express.Router();

router.get('/', getStudents);
// router.post('/', createPost);

export default router;