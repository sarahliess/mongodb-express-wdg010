const User = require("../model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, age, hobbies } = req.body; //req.body destrukturieren
    //req.body.name, req.body.age, req.body.hobbies
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, hobbies } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, hobbies },
      { new: true } //direkt upgedatete Daten anzeigen, nicht alte Version
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).send(`${deletedUser.name} has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
