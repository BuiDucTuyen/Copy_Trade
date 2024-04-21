import React from "react";
import Youtube from "../../Icon/Youtube";
import Tiktok from "../../Icon/Tiktok";
import Discord from "../../Icon/Discost";
import Facebook from "../../Icon/Facebook";
import Twitter from "../../Icon/Tweter";

const Footer = () => {
  return (
    <div className="max-w-[1980px] p-10 text-white  lato">
      <div className="h-auto  mt-9 flex flex-col items-center justify-between xl:flex-row xl:items-start gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-[30px] font-bold">LOGO</div>
          <div className="max-w-[544px]"></div>
          <div className="flex gap-6 pt-3">
            <Youtube />
            <Tiktok />
            <Discord />
            <Facebook />
            <Twitter />
            <ins />
          </div>
        </div>
        <div className="flex items-center justify-center xl:flex-row xl:items-start gap-14 text-black text-[20px]">
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/3">
            <p className="text-white text-[16px]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
          </div>
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/3">
            <p className="text-white text-[16px]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
          </div>
          <div className="flex flex-col gap-3 sm:w-1/2 xl:w-1/3">
            <p className="text-white text-[16px]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
            <p className="text-[#72728F]">Lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="max-w-full mt-5 border-t border-black"></div>
      <div className="h-auto  mt-9 flex flex-col  items-center justify-between xl:flex-row xl:items-start gap-5">
        <div className="max-w-[326px]">
          © GamingPlace 2024 copyrights - Trendpad
        </div>
        <div className="flex gap-8 flex-wrap">
          <div className="w-[60px] h-[60px]">
            <img src="Daco_5097076 1.png" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="image 72.png" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="76.svg" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="pci-dss-compliant-logo-vector.svg" alt="" />
          </div>
          <div className="w-[60px] h-[60px]">
            <img src="Group 6394.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
