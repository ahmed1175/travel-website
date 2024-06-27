"use client";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";
import { Nav_Links } from "../Data/data";
import Button from "./button";
import { useState } from "react";
const Nav = () => {
  const [menu, setmenu] = useState(false);
  const handlemenu = () => {
    setmenu(true);
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <nav className=" FlexBetwean py-5 z-30 max-container padding-container relative ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="gap-12 h-full hidden lg:flex ">
        {Nav_Links.map((item) => {
          return (
            <Link
              key={item.key}
              href={item.href}
              className=" text-gray-50 regular-16 flexCenter cursor-pointer pb-1 transition-all hover:font-bold "
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
      <div className=" hidden lg:flexCenter">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={"/menu.svg"}
        height={32}
        width={32}
        alt="menu"
        className="lg:hidden inline-block cursor-pointer hover:scale-110 duration-300"
        onClick={handlemenu}
      />
      {menu && (
        <div className=" fixed  top-0 right-0 left-0 bottom-0 regular-16  backdrop-blur-[4px]">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="container flex w-[60%] m-auto  flex-col p-4  mt-[2.5rem] rounded-[1rem] bg-[#E7F0DC] text-black "
          >
            <li className="font-bold text-2xl  ">
              <button
                onClick={() => {
                  setmenu(false);
                }}
              >
                <span className="px-1.5  " />
                {"X"}
              </button>
            </li>
            {Nav_Links.map((items) => {
              return (
                <motion.li
                  key={items.key}
                  variants={item}
                  className="item p-3 m-3 text-center justify-center cursor-pointer items-center flex text-xl font-semibold "
                >
                  {items.label}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
