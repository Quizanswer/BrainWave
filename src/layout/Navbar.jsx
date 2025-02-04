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
import React, { useState } from "react";
import Logo from "../assets/images/NavLogo.png";
import CommonWrapper from "../components/CommonWrapper";
import { NavLink } from "react-router-dom";
import LoginModal from "../components/LoginModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsloginopen] = useState(false);

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
      {/* <section className="bg-red-600">
        <CommonWrapper>
          <section className="flex items-center text-white md:justify-between px-7">
            <div className="flex items-center justify-center space-x-6 md:justify-start">
              <div className="flex items-center space-x-2">
                <IoMdCall className="text-2xl" /> <p>+015858547156</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdOutlineMailOutline className="text-2xl" />
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="items-center hidden space-x-2 md:flex">
              <CiLocationOn className="text-2xl" />
              <p>Feni, Chattagram,Bangladesh 3900</p>
            </div>
          </section>
        </CommonWrapper>
      </section> */}
      <CommonWrapper>
        <Navbar
          classNames={{ wrapper: "bg-[#FDF6EA]" }}
          onMenuOpenChange={setIsMenuOpen}
          className="text-white "
          maxWidth="full"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className={`${
                isMenuOpen ? "text-black" : "text-black"
              } sm:hidden`}
            />
            <NavbarBrand className="space-x-3">
              <NavLink className="flex items-center space-x-3 " to="/">
                <img
                  src={Logo}
                  alt="logo"
                  className="hidden w-16 h-16 rounded-full md:block"
                />
                <h1 className="text-xl font-semibold text-black md:text-2xl">
                  <span className="text-xl font-semibold text-orange-500 md:text-2xl">
                    B
                  </span>
                  rainWave
                </h1>
              </NavLink>
              <Input
                classNames={{
                  base: "max-w-full max-w-[18rem] lg:max-w-[32rem] xl:max-w-[35rem] h-10 lg:pl-16 xl:pl-0",
                  mainWrapper: "h-full",
                  input: "text-small",

                  inputWrapper:
                    "h-full font-normal text-default-500 ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48]",
                }}
                startContent={<SearchIcon size={18} />}
                placeholder="Search here..."
                radius="none"
                type="search"
              />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden gap-4 lg:flex " justify="center">
            <NavbarItem>
              <Link href="/">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link aria-current="page" href="/course">
                Course
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/blog">Blog</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/help">Help Center</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent
            justify="center"
            className="items-center hidden md:flex"
          >
            <NavbarItem>
              <Link onClick={() => setIsloginopen(true)} href="#">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <span className="text-black">|</span>
            </NavbarItem>
            <NavbarItem>
              <Link href="/registration">Register</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg"
                >
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
