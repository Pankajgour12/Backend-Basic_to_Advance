import { createTask, getTasks } from "../services/task.service.js";

export const addTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await createTask(req.session.user._id, title, description);

    res.status(201).json({
      success: true,
      message: "Task Created Successfully",
      task: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await getTasks(req.session.user._id);

    res.status(201).json({
      success: true,
      message: "Task Get Successfully",
      task: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
