import Link from "next/link";
import React from "react";

const XNavbar = () => {
  return (
    <nav className="flex p-4 border-b-2 border-black">
      <Link href={"/"} className="flex-1">
        Daniel Gavidia
      </Link>
      <Link href={`/resume`}>Resume</Link>
    </nav>
  );
};

export default XNavbar;
