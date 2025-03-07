"use client"

import Navbar from "@/GlobalComponent/Layout/Navbar";
import Preview from "@/GlobalComponent/Layout/Preview";
import React from "react";


const Header: React.FC = () => {
  return (
    <div className="header">
      <Navbar/>
      <Preview />
    </div>
  );
};

export default Header;