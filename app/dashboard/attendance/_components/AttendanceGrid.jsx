import React, { useEffect, useState } from 'react';

function AttendanceGrid({ AttendanceList }) { // Destructure props
  const [rowData, setRowData] = useState([]); // Initialize as an array

  useEffect(() => {
    if (!Array.isArray(AttendanceList)) {
      console.error("AttendanceList is not an array:", AttendanceList);
      return;
    }

    const getUniqueRecord = () => {
      const uniqueRecord = [];
      const existingUser = new Set();

      AttendanceList?.forEach((record) => {
        if (!existingUser.has(record.studentId)) {
          existingUser.add(record.studentId);
          uniqueRecord.push(record);
        }
      });

      return uniqueRecord;
    };

    const userList = getUniqueRecord();
    console.log("Unique Records:", userList);
    setRowData(userList);
  }, [AttendanceList]);

  return (
    <div>
      <h2>Attendance Grid</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((record) => (
            <tr key={record.studentId}>
              <td>{record.studentId}</td>
              <td>{record.name}</td>
              <td>{record.attendanceStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceGrid;
