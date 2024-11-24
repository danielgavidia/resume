"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const XNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      buttonRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex p-4 border-b-2 border-black items-center">
      <Link href={"/"} className="flex-1 text-xl font-bold">
        Daniel Gavidia
      </Link>

      <button ref={buttonRef} className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "flex bg-gray-100" : "hidden"
        } md:flex absolute md:relative top-16 md:top-0 right-0 md:right-auto flex-col md:flex-row md:space-x-4 bg-white md:bg-transparent w-full md:w-auto p-4 md:p-0 space-y-2 md:space-y-0`}
      >
        <Link
          href={`/`}
          onClick={() => setIsMenuOpen(false)}
          className="bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-red-800 rounded-xl flex items-center justify-center"
        >
          About
        </Link>
        <Link
          href={`/portfolio`}
          onClick={() => setIsMenuOpen(false)}
          className="bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-red-800 rounded-xl flex items-center justify-center"
        >
          Portfolio
        </Link>
        <Link
          href={`/resume`}
          onClick={() => setIsMenuOpen(false)}
          className="bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-red-800 rounded-xl flex items-center justify-center"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default XNavbar;
