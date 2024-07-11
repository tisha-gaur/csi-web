import React from "react";
import loc from "../assets/loc.png";
import logo from "../assets/Logo Celebal 1.svg";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-slate-500 mt-32 w-full">
            <div className="flex flex-wrap justify-between items-start w-4/5 mx-auto p-16">
                <img src={logo} className="w-44 mb-8" alt="" />

                <div className="flex justify-end gap-8 md:w-1/2  text-white ">
                    <div className="flex flex-col gap-3 md:w-1/4 w-60">
                        <p className="text-sm font-light">Company</p>
                        <p className="font-medium">About Us</p>
                        <p className="font-medium">Events & News</p>
                        <p className="font-medium">Celebal Website</p>
                    </div>

                    <div className="flex flex-col gap-3 md:w-1/2 w-60">
                        <p className="text-sm font-light">Address</p>
                        <div className="flex gap-4">
                            <img src={loc} className="h-5 w-5" alt="" />
                            <p className="font-medium">
                                3rd Floor, A Wing, F-202-204,Mansarovar, RIICO Industrial
                                Area,Jaipur, Rajasthan, 302020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-300 " />
            <div className="flex justify-between p-14 flex-wrap">
                <div className="flex gap-8">
                    <p className="text-white">Copyright © 2022. All rights reserved.</p>
                    <p className="text-white">Privacy Policy</p>
                    <p className="text-white">Terms of Service</p>
                </div>
                <div className="flex gap-5">
                    <FaTwitter className="fill-white h-6 w-6" />
                    <FaLinkedin className="fill-white h-6 w-6" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
