import React from "react";
import { heroData } from "../data";
const Hero = () => {
  return (
    <div id="Notre Ecole" className="my-20">
      <div className="  gap-4 flex flex-col   items-center text-center ">
        <div className="font-bold uppercase text-3xl lg:text-4xl 2xl:text-5xl space-y-2 2xl:space-y-4 text-pimaryBlue">
          <h1>bienvenue</h1>
          <h1>
            {" "}
            a jeanne d'arc{" "}
            <span className=" bg-lightYellow text-white">trilingue</span> school
          </h1>
        </div>
        <p className="">La guete de l'execellence</p>
        <div className="h-2 w-32   bg-pimaryBlue" />
      </div>
      <div className="min-h-[68vh] flex lg:flex-row flex-col items-center w-full  lg:w-[90%] lg:mr-auto my-10  ">
            <div className=" bg-pimaryBlue flex-1 ">
        <div className="min-h-[68vh] 2xl:min-h-[50vh] space-y-6 p-6 lg:p-auto text-white  flex justify-center flex-col items-center  ">
            <div className="max-w-lg relative 2xl:max-w-2xl 2xl:text-xl text-lightwhite">
                <h2 className="font-bold text-3xl mb-4 uppercase max-w-lg">mot du directeur</h2>
                <p>Chers parents,</p>
                <p >{heroData.desc} <span className="text-lightYellow cursor-pointer">Lire la suite</span>
                </p>
                 <div className="absolute uppercase cursor-pointer  flex items-center gap-2  bottom-8 lg:bottom-4 left-2">
                     <img  src={heroData.playimg} alt="" />
                     <p >play video</p>
                 </div>
            </div>
            </div>
        </div>
        <div className="flex-2 relative -top-10 lg:top-0 lg:-left-10 shadow">
          <img className="" src={heroData.drimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
