import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" navbar bg-[#F3F2F8] px-7 flex gap-6 " >
      <NavLink
        to={"/basicdetail"}
        className={({ isActive }) =>
         "font-inter-500 text-[12px] text-[#06031C] "  +  (isActive ? "border-b-2 border-[#6B5DC7] pb-1" : "pb-1")
        }
      >
        Basic Detail
      </NavLink>
      <NavLink
        to={"/termsdetail"}
        className={({ isActive }) =>
         "font-inter-500 text-[12px] text-[#06031C] "  +  (isActive ? "border-b-2 border-[#6B5DC7] pb-1" : "pb-1")
        }
      >
        Terms Detail
      </NavLink>
      <NavLink
        to={"/userdetail"}
        className={({ isActive }) =>
         "font-inter-500 text-[12px] text-[#06031C] "+  (isActive ? "border-b-2 border-[#6B5DC7] pb-1" : "pb-1")
        }
      >
        {" "}
        User Detail
      </NavLink>
      <NavLink
        to={"/addressdetail"}
        className={({ isActive }) =>
         "font-inter-500 text-[12px] text-[#06031C] "+ (isActive ? "border-b-2 border-[#6B5DC7] pb-1" : "pb-1")
        }
      >
        Address Detail
      </NavLink>
    </div>
  );
}

export default Navbar;
