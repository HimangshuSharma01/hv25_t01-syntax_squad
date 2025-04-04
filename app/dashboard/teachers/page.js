"use client";
import Geofence from "app/dashboard/teachers/_components/geofence";
import { useState } from "react";

export default function AttendancePage() {
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const markAttendance = () => {

    setTimeout(() => {
      setAttendanceMarked(true);
      alert(" Attendance Marked Successfully!");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Teacher Attendance</h1>
      <Geofence onMarkAttendance={markAttendance} />

      {attendanceMarked && (
        <p className="text-green-600 font-semibold mt-4">
          Attendance has been recorded!
        </p>
      )}
    </div>
  );
}
