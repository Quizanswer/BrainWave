import React, { useContext, useState } from "react";
import { Form, Input, Button, Checkbox } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContextProvider";
import Cookies from "js-cookie";
const Login = ({ Class, setIsloginopen }) => {
  const { signIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data) {
        toast.success("Login successfull");
        setUser(true);
        Cookies.set("user", data.data.token);
        setIsloginopen(false);
        navigate("/");
      }
    },
  });
  return (
    <Form
      className={`flex flex-col w-full gap-4 ${Class}`}
      validationBehavior="native"
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        mutate(data);
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

      {isPending ? (
        <Button
          isLoading
          variant="flat"
          size="lg"
          radius="sm"
          className="bg-[#838c48] text-white"
        >
          Loging...
        </Button>
      ) : (
        <Button
          className="bg-[#838c48] text-white hover:bg-[#303030] "
          type="submit"
          variant="flat"
          size="lg"
          radius="sm"
        >
          LOG IN
        </Button>
      )}

      <p className="text-sm text-[#dd904c] hover:text-[#838c48] transition-all cursor-pointer">
        Lost your password ?
      </p>
    </Form>
  );
};

export default Login;
