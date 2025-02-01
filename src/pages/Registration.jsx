import React from "react";
import CommonWrapper from "../components/CommonWrapper";
import { Form, Input, Button, Checkbox } from "@nextui-org/react";
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
          <div className="flex gap-4 my-auto">
            <div className="flex flex-col w-1/2 gap-4 mx-auto">
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
                    inputWrapper: "ring-1 ring-[#E2D6C1] bg-white ",
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
                    inputWrapper: "ring-1 ring-[#E2D6C1] bg-white ",
                  }}
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  radius="none"
                />

                <Checkbox defaultSelected color="default">
                  Default
                </Checkbox>

                <Button type="reset" variant="flat">
                  Login
                </Button>
              </Form>
            </div>
            <div className="flex flex-col w-1/2 gap-4 mx-auto">
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
                    inputWrapper: "ring-1 ring-[#E2D6C1] bg-white ",
                  }}
                  errorMessage="username"
                  label="Username or Email Address "
                  labelPlacement="outside"
                  name="username"
                  placeholder=" "
                  type="text"
                  radius="none"
                />

                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  radius="none"
                  classNames={{
                    inputWrapper: "ring-1 ring-[#E2D6C1] bg-white ",
                  }}
                />

                <Checkbox defaultSelected color="default">
                  Default
                </Checkbox>

                <Button type="reset" variant="flat">
                  Login
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
