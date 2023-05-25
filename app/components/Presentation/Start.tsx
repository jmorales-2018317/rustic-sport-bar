import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logos/RusticLogo.png";
import { FaTiktok, SiFacebook, RiInstagramLine, FaWhatsapp, GiKnifeFork, BiDrink, HiBars3 } from "react-icons/all";
import { inter } from "../../../fonts";

/*<div className="flex flex-row-reverse justify-self-end items-center z-10 text-[23px] pr-16 space-x-5 space-x-reverse max-sm:hidden">
            <Link href="#" className="flex hover:opacity-[75%]">
              <FaTiktok />
              <p className="text-[16px] pl-2">Eventos</p>
            </Link>
            <Link href="#" className="flex hover:opacity-[75%]">
              <GiKnifeFork />
              <p className="text-[16px] pl-2">Platillos</p>
            </Link>
            <Link href="#" className="flex hover:opacity-[75%]">
              <BiDrink />
              <p className="text-[16px] pl-2">Bebidas</p>
            </Link>
            <Link href="#" className="flex hover:opacity-[75%]">
              <FaFacebook />
              <p className="text-[16px] pl-2">Inicio</p>
            </Link>
          </div>*/

const Start = () => {
  return (
    <div className={inter.className}>
      <div className="relative bg-fixed bg-start bg-cover h-screen" id="home">
        <div className="absolute inset-0 gradient opacity-75 z-0" />

        <div className="flex justify-between text-white h-[25%]">
            <div className="flex flex-row-reverse items-center z-10 text-[28px] max-xl:text-[22px] max-md:text-[28px] pl-16 space-x-28 max-lg:space-x-0  space-x-reverse max-sm:hidden">
            <Link href="#" className="flex align-bottom hover:opacity-[75%] max-lg:pl-10 max-md:pl-20">
              <FaTiktok />
              <p className="text-[17px] max-xl:text-[13px] max-md:hidden  pl-2">TikTok</p>
            </Link>
            <Link href="#" className="flex hover:opacity-[75%]">
              <RiInstagramLine />
              <p className="text-[17px] max-xl:text-[13px] max-md:hidden  pl-2">Instragram</p>
            </Link>
          </div>

          <Image
            className="h-[240px] w-[220px] max-xl:h-[200px] max-xl:w-[180px] max-sm:h-[150px] max-sm:w-[140px] z-10 mr-5 max-sm:m-3"
            src={logo}
            alt=""
          />

          <div className="flex flex-row-reverse items-center z-10 sm:hidden text-[32px] pr-16">
            <Link href="#" className="flex hover:opacity-[75%]">
              <HiBars3 />
            </Link>
          </div>

          <div className="flex flex-row-reverse items-center z-10 text-[28px] max-xl:text-[22px] max-md:text-[28px] pr-16 space-x-28 max-lg:space-x-0 space-x-reverse max-sm:hidden">
            <Link href="#" className="flex hover:opacity-[75%] max-lg:pl-10 max-md:pl-20">
              <SiFacebook />
              <p className="text-[17px] max-xl:text-[13px] max-md:hidden pl-2">Facebook</p>
            </Link>
            <Link href="#" className="flex hover:opacity-[75%]">
              <FaWhatsapp />
              <p className="text-[17px] max-xl:text-[13px] max-md:hidden pl-2">WhatsApp</p>
            </Link>
          </div>
        </div>

        <div className="flex justify-between text-white h-[75%]">
          <div className="z-10 w-full pl-32 pt-60 max-sm:pl-20">
            <h1 className=" text-7xl max-xl:text-[45px] max-sm:text-[30px]">
              Rustic Sport Bar
            </h1>
            <p className="text-xl mt-3 w-[60%] max-xl:text-[14px]">
              ¡Diversión, deporte y buena compañía!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
