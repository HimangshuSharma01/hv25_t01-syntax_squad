"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_services/GlobalApi";

function DEPTSelect(selectedGrade) {
  const [DeptList, setDeptartmentList] = useState([]);

  useEffect(() => {
    GetAllDepartmentList();
  }, []);

  const GetAllDepartmentList = () => {
    GlobalApi.GetAllDepartment().then((resp) => {
      setDeptartmentList(resp.data);
    });
  };

  return (
    <div>
      <select className="w-20 bg-gray-800 text-white border border-gray-600 rounded my-3 px-1 py-1 focus:outline-none"
      onChange={(e)=>selectedGrade(e.target.value)}>
        {DeptList?.map((item, index) => (
          <option key={index} value={item.department}>
            {item.department}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DEPTSelect;
