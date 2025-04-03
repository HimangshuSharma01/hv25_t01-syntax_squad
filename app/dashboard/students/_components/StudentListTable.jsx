"use client";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { Search, Trash } from "lucide-react";
import { Button } from "@/@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";

ModuleRegistry.registerModules([AllCommunityModule]);

function StudentListTable({ studentList,refreshData }) {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];

  const CustomButtons = (props) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button size="sm" variant="destructive" className="p-1 md:p-2">
            <Trash size={18} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle> Remove Student?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              Student Information.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>DeleteRecord(props?.data?.id)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  const [colDefs, setColDefs] = useState([
    { field: "id", headerName: "Sl no.", width: 70, filter: true },
    { field: "name", headerName: "Name", width: 180, filter: true },
    { field: "rollNo", headerName: "Univ. Roll No.", width: 180, filter: true },
    { field: "year", headerName: "Year", width: 80, filter: true },
    { field: "phoneNo", headerName: "Contact", width: 150, filter: true },
    { field: "department", headerName: "Dept.", width: 140, filter: true },
    { field: "address", headerName: "Address", width: 300, filter: true },
    {
      field: "action",
      headerName: "Actions",
      width: 100,
      cellRenderer: CustomButtons,
    },
  ]);

  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {
    if (studentList) {
      setRowData(studentList);
    }
  }, [studentList]);
const DeleteRecord=(id)=>{
  GlobalApi.DeleteStudentRecord(id).then(resp=>{
    if(resp)
      {
        toast('Student Record Deleted Successfully!')
refreshData()
        
  }
})

}
  return (
    <div className="mt-20 w-full px-4 md:px-8">
      <div className="my-1 p-2 rounded-lg border shadow flex gap-3 items-center w-full ">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 text-lg bg-transparent outline-none"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>

      <div
        className="mt-4 w-full overflow-auto"
        style={{ minHeight: "400px", maxHeight: "80vh" }}
      >
        <AgGridReact
          quickFilterText={searchInput}
          rowData={rowData}
          columnDefs={colDefs}
          domLayout="autoHeight"
          className="ag-theme-alpine w-full"
        />
      </div>
    </div>
  );
}

export default StudentListTable;
