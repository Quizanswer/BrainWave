import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import Logo from "../assets/images/NavLogo.png"
import CommonWrapper from "../components/CommonWrapper";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

import { CiLocationOn } from "react-icons/ci";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  return (
    <section className="bg-gray-100" >
      <section className="bg-red-600">
        <CommonWrapper>
          <section className="flex items-center md:justify-between px-7 text-white">
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <div className="flex items-center space-x-2"><IoMdCall className="text-2xl" /> <p>+015858547156</p></div>
              <div className="flex items-center space-x-2">
                <MdOutlineMailOutline className="text-2xl" /> <p>example@gmail.com</p>
              </div>
            </div>
            <div className="md:flex items-center space-x-2 hidden">
              <CiLocationOn className="text-2xl" /> <p>Feni Sadar, Bangladesh</p>
            </div>
          </section>
        </CommonWrapper>
      </section>
      <CommonWrapper>
        <Navbar onMenuOpenChange={setIsMenuOpen} className="text-white bg-gray-100 bg-transparent" maxWidth="full">

          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className={`${isMenuOpen ? "text-black" : "text-black"} sm:hidden`}

            />
            <NavbarBrand className="space-x-3">

              <img src={Logo} alt="logo" className="w-16 h-16 rounded-full" />
              <h1 className="font-semibold text-2xl text-black"><span className="text-2xl font-semibold text-orange-500">B</span>rainWave</h1>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" href="#">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
    </section>
  );
}

