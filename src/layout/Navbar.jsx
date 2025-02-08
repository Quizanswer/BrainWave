import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
} from "@nextui-org/react";
import React, { useContext, useState } from "react";
import Logo from "../assets/images/NavLogo.png";
import CommonWrapper from "../components/CommonWrapper";
import { NavLink } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import { BsPersonFill } from "react-icons/bs";
import { AuthContext } from "../hooks/AuthContextProvider";

import Cookies from "js-cookie";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsloginopen] = useState(false);
  const { user, setUser, logout } = useContext(AuthContext);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  //  SERACHICON FOR MD DEVICE.
  const SearchIcon = ({
    size = 24,
    strokeWidth = 1.5,
    width,
    height,
    ...props
  }) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  };

  return (
    <section className="bg-[#FDF6EA]">
      <CommonWrapper>
        <Navbar
          classNames={{ wrapper: "!bg-transparent" }}
          onMenuOpenChange={setIsMenuOpen}
          className="text-white bg-transparent "
          maxWidth="full"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className={`${
                isMenuOpen ? "text-black" : "text-black"
              } sm:hidden`}
            />
            <NavbarBrand className="flex justify-between gap-5 ">
              <NavLink className="flex items-center gap-4 " to="/">
                <img
                  src={Logo}
                  alt="logo"
                  className="hidden w-16 h-16 rounded-full md:block"
                />
                <div className="text-xl font-semibold text-black md:text-2xl">
                  <span className="text-xl font-semibold text-orange-500 md:text-2xl">
                    B
                  </span>
                  rainWave
                </div>
              </NavLink>
              <div className="flex-1 hidden sm:block">
                <Input
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  startContent={<SearchIcon size={18} />}
                  placeholder="Search here..."
                  radius="none"
                  type="search"
                />
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden gap-4 lg:flex " justify="center">
            <NavbarItem>
              <Link href="/">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link aria-current="page" href="/question">
                Create Question
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/mcq">MCQ</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/quiz">Quiz</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="center" className="flex items-center">
            {user ? (
              <NavbarItem>
                <Link onPress={logout} href="#">
                  Logout
                </Link>
              </NavbarItem>
            ) : (
              <NavbarItem>
                <Link
                  onPress={() => {
                    setIsloginopen(true);
                  }}
                  href="#"
                >
                  Login
                </Link>
              </NavbarItem>
            )}

            {!user && (
              <>
                <NavbarItem>
                  <span className="text-black">|</span>
                </NavbarItem>
                <NavbarItem>
                  <Link href="/registration">Register</Link>
                </NavbarItem>
              </>
            )}

            {user && (
              <span className="text-3xl text-[#DA853D] cursor-pointer">
                <BsPersonFill />
              </span>
            )}
          </NavbarContent>
          <NavbarMenu className="">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link className="w-full" href="#" size="lg">
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </CommonWrapper>

      {isLoginOpen && <LoginModal setIsloginopen={setIsloginopen} />}
    </section>
  );
}
