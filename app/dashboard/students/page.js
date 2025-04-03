"use client";
import React, { useState, useEffect } from "react";
import AddNewStudent from "./_components/AddNewStudent";
import GlobalApi from "@/app/_services/GlobalApi";
import StudentListTable from "./_components/StudentListTable";
import { ThemeProvider } from "next-themes";

function Students() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    GetAllStudents();
  }, []);

  const GetAllStudents = () => {
    GlobalApi.GetAllStudents().then((resp) => {
      setStudentList(resp.data);
    });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="p-9">
        <h1 className="text-2xl fixed font-semibold flex justify-between items-center">
          Students
        </h1>
        <h2 className="absolute right-4">
          <AddNewStudent />
        </h2>
        <div>
        <StudentListTable studentList={studentList} refreshData={GetAllStudents} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Students;
