import React from "react";
import CommonWrapper from "../components/CommonWrapper";

const Registration = () => {
  return (
    <>
      <div className="bg-[#DA853D] py-8 ">
        <CommonWrapper>
          <h2 className="text-4xl font-semibold py-1">Registration</h2>
          <p>Home / Registration</p>
        </CommonWrapper>
      </div>

      <div className="bg-[#FDF6EA]">
        <CommonWrapper>
          <h2 className="text-[#303030] text-3xl">Login Form</h2>
          <p>Already a Member? Log in here.</p>
        </CommonWrapper>
      </div>
    </>
  );
};

export default Registration;
