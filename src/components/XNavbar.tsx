import Link from "next/link";
import React from "react";

const XNavbar = () => {
  return (
    <nav className="flex p-4 border-b-2 border-black">
      <Link href={"/"} className="flex-1">
        Daniel Gavidia
      </Link>
      <div className="flex space-x-4">
        <Link href={`/portfolio`}>Portfolio</Link>
        <Link href={`/resume`}>Resume</Link>
      </div>
    </nav>
  );
};

export default XNavbar;
