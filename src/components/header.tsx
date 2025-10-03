"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import { NavLink } from "@/lib/types";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "./context/active-section-provider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveSection, activeSection, setTimeOfLastClick } =
    useActiveSection();

  const MobileNavItem = (data: NavLink) => {
    return (
      <li
        onClick={() => setIsOpen(false)}
        className="border-muted-foreground/10 py-3 text-sm [&:not(:last-child)]:border-b" //except last child it will dislpay border
      >
        <Link className="block" href={data.href}>
          {data.name}
        </Link>
      </li>
    );
  };

  const DesktopNavItem = (data: NavLink) => {
    return (
      <li className="">
        <Link
          className="hover:text-foreground relative px-4 py-2 transition-colors"
          href={data.href}
          onClick={() => {
            setActiveSection(data.name);
            setTimeOfLastClick(Date.now());
          }}
        >
          {data.name}
          {data.name === activeSection && (
            <motion.span
              className="bg-muted absolute inset-0 -z-10 rounded-full"
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-5 z-20 my-5 sm:top-10 sm:my-10"
    >
      {/*Mobile Navbar*/}
      <div className="sm:hidden flex items-center gap-2 justify-center">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/80 backdrop-blur-sm"
            >
              Menu <Icons.chevronDown className="ml-2 size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-md self-start font-medium">
                Navigation
              </DialogTitle>
            </DialogHeader>
            <nav>
              <ul>
                {navLinks.map((i) => (
                  <MobileNavItem key={i.name} {...i} />
                ))}
              </ul>
            </nav>
          </DialogContent>
        </Dialog>

        {/*Tablet/Desktop Navbar*/}

        <ThemeToggle className="bg-background/80 backdrop-blur-sm" />
      </div>

      <nav className="bg-background/80 items-center gap-2 text-muted-foreground hidden text-sm sm:flex rounded-full border px-2 py-3 backdrop-blur-sm">
        <ul className="flex gap-5">
          {navLinks.map((i) => (
            <DesktopNavItem key={i.name} {...i} />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
