"use client"
import { Link } from "@nextui-org/link";
import { useState } from "react";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri"
import { NavLinks } from "@/components/Header/Navbar/navLinks";
import { Logo } from "../logo";
import { ThemeSwitch } from "@/components/theme-switch";
import { SocialLinks } from "@/components/SocialLink/socialLink"
import { ContactLink } from "@/components/contactLink"



export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="w-full p-4 px-2 sm:px-10 flex items-center justify-between">
      <Logo />

      <nav className="flex items-center justify-between">
        <div className="flex items-center font-medium justify-between">
          <ul className="md:flex hidden uppercase items-center gap-8  ">
            <NavLinks />
            <li>
              <Link href={"/about"} className="py-7 px-3 inline-block" >
                About Us
              </Link>
            </li>
            <ThemeSwitch />
          </ul>

        </div>
      </nav>


      {/* Mobile nav */}

      <nav className=" flex items-center justify-between">
        <div className="flex items-center font-medium justify-between">

          <ul
            className={`md:hidden fixed w-[60%] top-0 pt-[12%] left-0 rounded-r-xl z-20 text-white light:text-black bg-black/75
            transform transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <li className="" >
              <NavLinks />
            </li>
            <li>
              <Link href={"/about"} className="py-7 px-3 inline-block">
                About Us
              </Link>
            </li>
            <ThemeSwitch className="ml-3" />
          </ul>

          <ul className=" md:flex items-center justify-center gap-2 mx-2">
            <div>
              <ContactLink />
            </div>
          </ul>

          {/* Menu Button */}
          <button
            className="sm:hidden z-50 w-[42] h[42] border rounded-lg shadow-xl"
            onClick={toggle}
            aria-label={open ? " " : " "}
          >
            <div className=" cursor-pointer transition-all ease duration-300">
              <div className="relative">
                {open ? <RiCloseFill className=" w-10 h-10" /> : <RiMenu2Fill className=" w-10 h-10" />}
              </div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};
