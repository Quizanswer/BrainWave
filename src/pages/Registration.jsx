import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Form, Input, Button, Select, SelectItem } from "@nextui-org/react";
import Login from "../components/Login";
import toast from "react-hot-toast";
import { registerUser } from "../Api/Api";
import { useMutation } from "@tanstack/react-query";
const role = [
  { key: "admin", label: "Admin" },
  { key: "examiner", label: "Examiner" },
  { key: "candidate", label: "Candidate" },
];

const Registration = () => {
  const { mutate, error, isPending, isSuccess } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      if (data) {
        toast.success("Register successfull");
      }
    },
  });

  return (
    <div className="">
      <div className="bg-[#DA853D] text-white py-8">
        <CommonWrapper>
          <h2 className="py-1 text-4xl font-semibold">Registration</h2>
          <p>Home / Registration</p>
        </CommonWrapper>
      </div>

      <div className="bg-[#FDF6EA] py-20">
        <CommonWrapper>
          <div className="flex flex-col gap-4 my-auto sm:flex-row">
            <div className="flex flex-col w-full gap-4 mx-auto sm:w-1/2">
              <h2 className="text-[#303030] text-3xl font-bold">Login Form</h2>
              <p className="text-[#8A8988] font-medium]">
                Already a Member? Log in here.
              </p>
              <Login />
            </div>
            <div className="flex flex-col w-full gap-4 mx-auto sm:w-1/2">
              <h2 className="text-[#303030] text-3xl font-bold">
                Register Form
              </h2>
              <p className="text-[#8A8988] font-medium]">
                Do not have an account? Register here
              </p>
              <Form
                className="flex flex-col w-full gap-4"
                validationBehavior="native"
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));
                  mutate(data);
                }}
                onReset={() => {
                  ("reset");
                }}
              >
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  errorMessage="Please input your name"
                  label="Name"
                  labelPlacement="outside"
                  name="name"
                  placeholder=" "
                  type="text"
                  radius="none"
                />
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  errorMessage="Please input your Username"
                  label="Username"
                  labelPlacement="outside"
                  name="username"
                  placeholder=" "
                  type="text"
                  radius="none"
                />
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  errorMessage="Please input your Email"
                  label="Email "
                  labelPlacement="outside"
                  name="email"
                  placeholder=" "
                  type="email"
                  radius="none"
                />
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  errorMessage="Please input your Password"
                  label="Password"
                  labelPlacement="outside"
                  name="password"
                  placeholder=" "
                  type="password"
                  radius="none"
                />
                <Select
                  defaultSelectedKeys={["candidate"]}
                  radius="none"
                  name="role"
                >
                  {role.map((role) => (
                    <SelectItem key={role.key}>{role.label}</SelectItem>
                  ))}
                </Select>

                {isPending ? (
                  <Button
                    isLoading
                    variant="flat"
                    size="lg"
                    radius="sm"
                    className="bg-[#838c48] text-white"
                  >
                    Registering...
                  </Button>
                ) : (
                  <Button
                    className="bg-[#838c48] text-white hover:bg-[#303030]"
                    type="submit"
                    variant="flat"
                    size="lg"
                    radius="sm"
                  >
                    REGISTER
                  </Button>
                )}
              </Form>
            </div>
          </div>
        </CommonWrapper>
      </div>
    </div>
  );
};

export default Registration;
