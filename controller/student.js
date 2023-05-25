const Student = require("../model/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, first_name, email } = req.body; //req.body destrukturieren
    //req.body.name, req.body.first_name, req.body.email
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, first_name, email } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, first_name, email },
      { new: true } //direkt upgedatete Daten anzeigen, nicht alte Version
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    res.status(200).send(`${deletedStudent.name} has been deleted.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
