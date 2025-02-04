import React, { useEffect, useRef } from "react";
import Login from "./Login";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const LoginModal = ({ setIsloginopen }) => {
  const loginModal = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!loginModal.current.contains(e.target)) {
        setIsloginopen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full p-4 bg-black md:px-8 bg-opacity-80">
      <div ref={loginModal} className="w-full max-w-xl py-5 bg-white sm:py-10">
        <h2 className="text-3xl font-bold text-center sm:text-5xl">
          Welcome <span className="text-[#838c48]">!Login</span>
        </h2>
        <Login Class="items-center pt-10 px-8" />

        <div className="bg-[#f2f2f2] py-8 mt-10">
          <div className="flex flex-col items-center justify-center gap-4 px-8 text-white sm:flex-row">
            <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#2d4373] hover:bg-[#DA853D] transition-all p-3 rounded-sm cursor-pointer">
              <span className="text-xl">
                <FaFacebookF />
              </span>
              <p className="text-sm">Connect With Facebook</p>
            </div>
            <div className="w-full sm:w-1/2 flex items-center gap-2 bg-[#c23321] hover:bg-[#DA853D] transition-all cursor-pointer p-3 rounded-sm">
              <span className="text-xl">
                <FaGoogle />
              </span>
              <p className="text-sm">Connect With Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
