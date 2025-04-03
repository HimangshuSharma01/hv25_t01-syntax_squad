const { default: axios } = require("axios");

const GetAllDepartment = () => axios.get("/api/department");
const CreateNewStudent = (data) => axios.post("/api/student", data);
const GetAllStudents = (id) => axios.get(`/api/student/`);
const DeleteStudentRecord = (id) => axios.delete(`/api/student?id=` + id);

export default {
  GetAllDepartment,
  CreateNewStudent,
  GetAllStudents,
  DeleteStudentRecord,
};
