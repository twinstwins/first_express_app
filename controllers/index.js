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

module.exports = {
  createTask,
}
