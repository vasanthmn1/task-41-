const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
});
module.exports = mongoose.model('Student', studentSchema)
