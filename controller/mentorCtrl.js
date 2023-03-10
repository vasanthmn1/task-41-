const mentorModel = require("../model/mentorModel");
const studentModel = require("../model/studentModel");

const createMentore = async (req, res) => {
    try {
        const { email } = req.body


        const alredyUser = await mentorModel.findOne({ email })
        const studentemail = await studentModel.findOne({ email })

        if (alredyUser || studentemail) {
            res.status(400).json({ message: "alredy using this email" });
        } else {
            const mentor = await mentorModel.create(req.body)
            res.status(201).json(mentor);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const mentorToStudent = async (req, res) => {
    try {
        const mentor = await mentorModel.findByIdAndUpdate(
            req.params.mentorId,
            { $addToSet: { students: req.params.studentId } },
            { new: true }
        ).populate('students');
        const student = await studentModel.findByIdAndUpdate(
            req.params.studentId,
            { mentor: req.params.mentorId },
            { new: true }
        );
        res.status(200).json({ mentor, student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};





module.exports = {
    createMentore,
    mentorToStudent,
}