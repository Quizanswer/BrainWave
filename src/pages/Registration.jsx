import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";
const role = [
  { key: "student", label: "Ttudent" },
  { key: "teacher", label: "Teacher" },
];
const Registration = () => {
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
              <Form
                className="flex flex-col w-full gap-4"
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));

                  setAction(`submit ${JSON.stringify(data)}`);
                }}
              >
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  className="bg-transparent outline-none"
                  errorMessage="Please enter email or username"
                  label="Username or Email Address "
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
                  errorMessage="Please enter a valid email"
                  label="Password"
                  labelPlacement="outside"
                  name="password"
                  placeholder=" "
                  type="password"
                  radius="none"
                />

                <Checkbox radius="none" defaultSelected color="default">
                  Remember Me
                </Checkbox>

                <Button
                  className="bg-[#838c48] text-white hover:bg-[#303030]"
                  type="submit"
                  variant="flat"
                  size="lg"
                  radius="sm"
                >
                  LOG IN
                </Button>
                <p className="text-sm text-[#dd904c] hover:text-[#838c48] transition-all cursor-pointer">
                  Lost your password ?
                </p>
              </Form>
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
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));

                  setAction(`submit ${JSON.stringify(data)}`);
                }}
              >
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  errorMessage="Username"
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
                  errorMessage="username"
                  label="Email "
                  labelPlacement="outside"
                  name="username"
                  placeholder=" "
                  type="text"
                  radius="none"
                  className=""
                />
                <Select defaultSelectedKeys={["student"]} radius="none">
                  {role.map((role) => (
                    <SelectItem
                      classNames={{ description: "bg-red-500" }}
                      key={role.key}
                    >
                      {role.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  errorMessage="Please enter a valid email"
                  label="Password"
                  labelPlacement="outside"
                  name="password"
                  placeholder=" "
                  type="password"
                  radius="none"
                />

                <Button
                  className="bg-[#838c48] text-white hover:bg-[#303030]"
                  type="submit"
                  variant="flat"
                  size="lg"
                  radius="sm"
                >
                  REGISTER
                </Button>
              </Form>
            </div>
          </div>
        </CommonWrapper>
      </div>
    </div>
  );
};

export default Registration;
