import React from "react";
import { Form, Input, Button, Checkbox } from "@nextui-org/react";
const Login = ({ Class }) => {
  return (
    <Form
      className={`flex flex-col w-full gap-4 ${Class}`}
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
            "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] py-6 font-medium ",
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
            "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48]  py-6 font-medium",
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
