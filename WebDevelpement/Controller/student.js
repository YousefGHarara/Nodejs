const students = [
  {
    id: 1,
    name: "ahmed",
    course_id: 1,
    grade: 88.4,
    skills: ["html", "css", "js"],
    active: true,
  },
  {
    id: 2,
    name: "yousef",
    course_id: 3,
    grade: 95.1,
    skills: ["php", "react"],
    active: false,
  },
  {
    id: 3,
    name: "mohammed",
    course_id: 7,
    grade: 75.9,
    skills: ["node"],
    active: true,
  },
];


const getProfile = (req, res, next) => {
  const stuId = req.query.id;

  const student = students.find((stu) => stu.id == stuId);

  res.json({
    name: student.name,
    skills: student.skills,
    active: student.active,
  });
};

const getGrades = (req, res, next) => {
  const stuId = req.query.id;

  const student = students.find((stu) => stu.id == stuId);

  res.json({
    name: student.name,
    grade: student.grade,
  });
};

const getTimeTable = (req, res, next) => {
  const stuId = req.query.id;

  const student = students.find((stu) => stu.id == stuId);

  res.json({
    name: student.name,
    course_id: student.course_id,
  });
};

module.exports = {
  getProfile, getGrades, getTimeTable
}
