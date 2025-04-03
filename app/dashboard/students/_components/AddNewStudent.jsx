"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import GlobalApi from "@/app/_services/GlobalApi";
import { index } from "drizzle-orm/gel-core";
import { toast } from "sonner";
import { LoaderIcon, Save } from "lucide-react";

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const [department, setDEPARTMENT] = useState();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    GetAllDepartmentList();
  }, []);

  const GetAllDepartmentList = () => {
    GlobalApi.GetAllDepartment().then((resp) => {
      setDEPARTMENT(resp.data);
    });
  };

  const onSubmit = (data) => {
    setLoading(true);
    console.log("FormData", data);
    GlobalApi.CreateNewStudent(data).then((resp) => {
      console.log("--", resp);
      if (resp.data) {
        reset();
        setOpen(false);
        toast("New Student Added !");
        
      }
      setLoading(false);
    });
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}> + Add New Student </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ADD NEW STUDENT</DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pd-4">
                  <label className="block text-left py-1.5">FULL NAME</label>
                  <Input
                    placeholder="ex. HIMANGSHU SHARMA"
                    {...register("name", { required: true })}
                  />
                  <label className="block text-left py-1.5">
                    UNIVERSITY ROLL
                  </label>
                  <Input
                    type="number"
                    placeholder="ex. 11930XXXXXX"
                    {...register("rollNo", { required: true })}
                  />

                  <label className="block text-left py-1.5">CONTACT NO.</label>
                  <Input
                    type="number"
                    placeholder="ex. 98320XXXXX"
                    {...register("phoneNo", { required: true })}
                  />

                  <label className="block text-left py-1.5">ADDRESS</label>
                  <Input
                    placeholder="54 LANE WARD 2nd OPPOSITE TO XXXX RAILWAY STATION PIN-7340XX"
                    {...register("address", { required: true })}
                  />

                  <div className="relative">
                    <label className="block text-left m-1.5">
                      SELECT DEPARTMENT
                    </label>
                    <select
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 focus:outline-none"
                      {...register("department", { required: true })}
                    >
                      {department?.map((item, index) => (
                        <option key={index} value={item.department}>
                          {item.department}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-left py-1.5">YEAR</label>
                    <select
                      className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-3 py-2 text-lg focus:outline-none"
                      {...register("year", { required: true })}
                    >
                      <option value="1">1st</option>
                      <option value="2">2nd</option>
                      <option value="3">3rd</option>
                      <option value="4">4th</option>
                    </select>
                  </div>

                  <div className="mt-12 flex justify-between">
                    <Button
                      type="button"
                      onClick={() => setOpen(false)}
                      variant="ghost"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disable={loading}>
                      {loading ? (
                        <LoaderIcon className="animate-spin" />
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
