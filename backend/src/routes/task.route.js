const express = require("express");
const taskModel = require("../models/task.model");
const router = express.Router();

router.post('/cratetask', async (req, res) => {
    const { title, content } = req.body;
    try {
        if (!title || !content) {
            return res.status(400).json(
                {
                    success: false,
                    message: "All fields are required!"
                }
            )
        }
        const newTask = await taskModel.create({
            title,
            content,
        })
        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})

router.get("/alltasks", async (req, res) => {
    try {
        const taks = await taskModel.find();
        return res.status(200).json({
            success: true,
            message: "all tasks fetched successfully",
            data: taks
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})



router.get("/gettask/:id", async (req, res) => {
    const { id } = req.params;
    console.log("taskid", id);
    if (!id) {
        return res.status(400).json(
            {
                success: false,
                message: "taks id is required!"
            }
        )
    }
    try {
        const task = await taskModel.findById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "task not found!"
            })
        }
        return res.status(200).json({
            success: true,
            message: "task fetched succcessfully",
            data: task
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})


router.put("/edittask/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "all fields are required"
        })
    }
    try {
        const newUpdateTask = {
            title,
            content
        }
        const updatedTask = await taskModel.findByIdAndUpdate(id, newUpdateTask)
    } catch (error) {

    }
});

router.delete("/deletetask/:id", async (req, res) => {
    const { id } = req.params;
    console.log("Taskid", id);
    if (!id) {
        return res.status(400).json(
            {
                success: false,
                message: "taks id "
            }
        )
    }
    try {
        const deletedTask = await taskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "task not founded"
            })
        }
        return res.status(200).json({
            success: true,
            message: "task deleted successfully",
            data: deletedTask
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }

})

module.exports = router;