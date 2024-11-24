import Link from "next/link";
import React from "react";

const XNavbar = () => {
  return (
    <nav className="flex p-4 border-b-2 border-black">
      <Link href={"/"} className="flex-1">
        Daniel Gavidia
      </Link>
      <div className="flex space-x-4">
        <Link
          href={`/`}
          className="bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-red-800 rounded-xl w-30 flex items-center justify-center"
        >
          About
        </Link>
        <Link
          href={`/portfolio`}
          className="bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-red-800 rounded-xl w-30 flex items-center justify-center"
        >
          Portfolio
        </Link>
        <Link
          href={`/resume`}
          className="bg-black text-white px-4 py-2 transition-colors duration-200 hover:bg-red-800 rounded-xl w-30 flex items-center justify-center"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default XNavbar;
