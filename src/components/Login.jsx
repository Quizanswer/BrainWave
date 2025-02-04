import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { loginrUser } from "../Api/Api";
import axios from "axios";
import toast from "react-hot-toast";
const Login = ({ Class }) => {
  // const [action, setAction] = useState("");

  // // const userSignin = async (userData) => {
  // //   const { data } = await axios.post(
  // //     "https://test-alchemy-backend.onrender.com/user/signin",
  // //     userData
  // //   );
  // // };

  const { mutate, error, isSuccess } = useMutation({
    mutationFn: loginrUser,
  });

  return (
    <Form
      className={`flex flex-col w-full gap-4 ${Class}`}
      validationBehavior="native"
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        // setAction(`${JSON.stringify(data)}`);
        // setAction(data);
        mutate(data);
        toast.success("Login successfull");
      }}
    >
      <Input
        isRequired
        classNames={{
          inputWrapper:
            "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48]  font-medium ",
        }}
        className="bg-transparent outline-none"
        errorMessage="Please enter email or username"
        label=" Email Address "
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
            "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48]   font-medium",
        }}
        errorMessage="Please enter a valid email"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder=" "
        type="password"
        radius="none"
      />

      <Checkbox
        className="self-start "
        radius="none"
        defaultSelected
        color="default"
      >
        Remember Me
      </Checkbox>

      <Button
        className="bg-[#838c48] text-white hover:bg-[#303030] "
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
  );
};

export default Login;
