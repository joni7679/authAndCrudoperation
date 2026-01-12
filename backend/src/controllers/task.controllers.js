const taskModel = require("../models/task.model");

exports.createTask = async (req, res) => {
    const { title, content } = req.body;
    const userId = req.userId;
    try {
        if (!title || !content) {
            r
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
            user: userId
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
}

exports.getAllTasks = async (req, res) => {
    const userId = req.userId;
    try {
        const taks = await taskModel.find({ user: userId });
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
}

exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
    if (!id) {
        return res.status(400).json(
            {
                success: false,
                message: "taks id is required!"
            }
        )
    }
    try {
        const task = await taskModel.findById(id, userId);
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
}

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
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
        const updatedTask = await taskModel.findByIdAndUpdate({ _id: id, user: userId }, newUpdateTask)
    } catch (error) {

    }
}

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
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
        const deletedTask = await taskModel.findByIdAndDelete({ _id: id, user: userId });
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
}
