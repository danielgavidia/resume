import Link from "next/link";
import React from "react";

const XNavbar = () => {
  return (
    <nav className="flex">
      <div className="flex-1">Daniel Gavidia</div>
      <Link href={`/resume`}>Resume</Link>
    </nav>
  );
};

export default XNavbar;
