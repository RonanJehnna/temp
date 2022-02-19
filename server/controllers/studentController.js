import StudentSchema from "../models/student.model";

// router.get("/", (req, res) => {
//   res.render("student/addOrEdit", {
//     viewTitle: "Insert Sttudent",
//   });
// });

// router.post("/", (req, res) => {
//   if (req.body._id == "") {
//     insertRecord(req, res);
//   } else {
//     updateRecord(req, res);
//   }
// });

// function insertRecord(req, res) {
//   var student = new Student();
//   student.fullName = req.body.fullName;
//   student.email = req.body.email;
//   student.mobile = req.body.mobile;
//   student.city = req.body.city;
//   student.save((err, doc) => {
//     if (!err) {
//       res.redirect("student/list");
//     } else {
//       console.log("Error during insert: " + err);
//     }
//   });
// }

// function updateRecord(req, res) {
//   Student.findOneAndUpdate(
//     { _id: req.body._id },
//     req.body,
//     { new: true },
//     (err, doc) => {
//       if (!err) {
//         res.redirect("student/list");
//       } else {
//         console.log("Error during update: " + err);
//       }
//     }
//   );
// }

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// router.get("/list", (req, res) => {
//   Student.find((err, docs) => {
//     if (!err) {
//       res.render("student/list", {
//         list: docs,
//       });
//     } else {
//       console.log("Error in retrieval: " + err);
//     }
//   });
// });

// router.get('/:id', (req, res) => {
//   Student.findById(req.params.id, (err, doc) => {
//     if(!err) {
//       res.render('student/addOrEdit', {
//         viewTitle: 'Update Student',
//         student: doc
//       });
//       console.log(doc);
//     }
//   });
// });

// router.get('/delete/:id', (req, res) => {
//   Student.findByIdAndRemove(req.params.id, (err, doc) => {
//     if(!err){
//       res.render('student/list');
//     } else{
//       console.log('Error in deletion: ' + err);
//     }
//   });
// });

const studentController = {
  getStudents,
}

// module.exports = router;