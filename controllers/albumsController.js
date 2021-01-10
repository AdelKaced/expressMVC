const { findAll, findOne, createOne } = require('../models/album');

const getAll = async (req, res) => {
  const data = await findAll();
  res.status(200).json(data);
};

const getOne = async (req, res) => {
  const data = await findOne(req.params.id);
  res.status(200).json(data);
};

const handlePost = async (req, res) => {
  const data = await createOne(req.body);
  res.status(201).json(data);
};

module.exports = {
  getAll,
  getOne,
  handlePost,
};
