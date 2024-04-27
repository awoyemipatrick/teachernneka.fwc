"use client"
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "@nextui-org/link";
import { links } from "@/components/Header/Navbar/Mylinks";

export const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link}>
          <div className="px-3 text-left md:cursor-pointer  group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <div className="text-xl md:hidden ">
                <span
                  name={`${heading === link.name ? <MdOutlineKeyboardArrowUp /> : < MdOutlineKeyboardArrowDown />
                    }`}
                ></span>
              </div>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                < MdOutlineKeyboardArrowDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block border bg-slate-300 border-black shadow-2xl rounded-xl p-4 z-10">
                  {link.sublink.map((i) => (
                    <div
                      key={i.name}
                      className="group relative flex items-center rounded-lg my-2.5 text-sm leading-6 hover:bg-gray-50 left-0"
                    >
                      <div className="flex h-11 w-11 flex-none mr-2 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {i.icon}
                      </div>
                      <div className="flex-auto">
                        <Link href={i.href} className="block font-semibold text-gray-900 px-2">
                          {i.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{i.description}</p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}  `}  >
            {link.sublink.map((index) => (
              <div
                key={index.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-green-700 shadow-2xl p-2 ">
                 {index.icon}
                </div>
                <div className="flex-auto">
                  <Link href={index.href} className="block font-semibold">
                    {index.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 ">{index.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};


