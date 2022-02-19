const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'This field is required'
  },
  email: {
    type: String,
    required: 'This field is required'
  },
  mobile: {
    type: Number,
    required: 'This field is required'
  },
  city: {
    type: String,
    required: 'This field is required'
  }
});

const StudentSchema = mongoose.model("Student", studentSchema);

// export default StudentSchema;
module.exports = StudentSchema;