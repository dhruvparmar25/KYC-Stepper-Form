import React from "react";
import LogoNav from "../assets/NavbarLogo.png";
import profile from "../assets/profile.jpg";
import { AiOutlineBank } from "react-icons/ai";

function Topbar() {
    return (
        <div className=" px-8 py-3">
            <div className="w-full flex justify-between ">
                <div className="bg-white shadow-2xl">
                    <img src={LogoNav} width={"36px"} height={"36px"} />
                </div>
                <div className="flex">
                    <div className="flex gap-2 justify-center items-center mr-2 text-[#6B5DC7]">
                        <AiOutlineBank /> Account
                    </div>
                    <div className="flex">
                        <img src={profile} width={40} height={40} className="rounded-full border-2 border-[#6B5DC7]" />
                    </div>
                    <div className="tracking-tight ml-2">
                        <p className="font-semibold text-inter-600 text-[14px] text-[#06031C]">James D. Steele</p>
                        <p className="font-semibold text-inter-400 text-[12px] text-[#696774]"> Admin</p>
                    </div>
                </div>
            </div>
            <div className="mt-2 border-t-1 border-zinc-200"><h1 className="font-bold text-inter-700 text-[20px] text-[#06031C] uppercase">KYC</h1>
            <p className=" text-inter-400 text-[10px] text-[#696774]">Add New KYC</p></div>
        </div>
    );
}

export default Topbar;
