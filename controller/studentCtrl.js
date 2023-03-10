// const mentorModel = require("../model/studentModel");

const studentModel = require("../model/studentModel");

const mentorModel = require("../model/mentorModel");
const createStudent = async (req, res) => {
    try {
        const { email } = req.body


        const alredyUser = await studentModel.findOne({ email })
        const mentoruser = await mentorModel.findOne({ email })

        if (alredyUser || mentoruser) {
            res.status(400).json({ message: "alredy using this email" });
        } else {
            const mentor = await studentModel.create(req.body)
            res.status(201).json(mentor);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createStudent
}