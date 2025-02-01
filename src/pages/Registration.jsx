import React from "react";
import CommonWrapper from "../components/CommonWrapper";

const Registration = () => {
  return (
    <>
      <CommonWrapper>
        <h2 className="py-1 text-4xl font-semibold">Registration</h2>
        <p>Home / Registration</p>
      </CommonWrapper>

      <div className="bg-[#FDF6EA]">
        <CommonWrapper>
          <h2>Registration</h2>
          <p>Home / Registration</p>

          <h2 className="text-[#303030] text-3xl">Login Form</h2>
          <p>Already a Member? Log in here.</p>
        </CommonWrapper>
      </div>
    </>
  );
};

export default Registration;
