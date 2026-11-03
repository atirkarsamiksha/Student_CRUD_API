const express = require("express");
const mongoose = require("mongoose");
const Student = require("../models/Student");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
    try {
        const { name, email, course, age } = req.body;
        const student = await Student.create({ name, email, course, age });
        res.status(201).json({ message: "Student created successfully", student });
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ message: "Email already exists" });
        res.status(400).json({ message: error.message });
    }
});

// READ ALL
router.get("/", async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        res.status(200).json({ count: students.length, students });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ ONE
router.get("/:id", async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id))
            return res.status(400).json({ message: "Invalid student ID" });
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id))
            return res.status(400).json({ message: "Invalid student ID" });
        const student = await Student.findByIdAndUpdate(req.params.id, req.body,
            { new: true, runValidators: true });
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id))
            return res.status(400).json({ message: "Invalid student ID" });
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
