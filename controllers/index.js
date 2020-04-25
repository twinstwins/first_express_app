const models = require('../models');

const createTask = async (req, res) => {
  try {
    const post = await models.Task.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllTasks = async (req, res) => {
  try {
    const posts = await models.Task.findAll({
      include: [
        {
          model: models.User,
        }
      ]
    });
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  createTask,
  getAllTasks
}
