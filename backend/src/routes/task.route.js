const express = require("express");
const taskModel = require("../models/task.model");
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require("../controllers/task.controllers");
const authMiddlware = require("../middleware/auth.middleware");
const router = express.Router();

router.post('/cratetask', authMiddlware, createTask)

router.get("/alltasks", authMiddlware, getAllTasks)

router.get("/gettask/:id", authMiddlware, getTaskById)

router.put("/edittask/:id", authMiddlware, updateTask);

router.delete("/deletetask/:id", authMiddlware, deleteTask)

module.exports = router;