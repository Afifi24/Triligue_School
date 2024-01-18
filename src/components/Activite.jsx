import React from "react";
import activiteimg from "../assets/activite.png";
import Bacimg from "../assets/BAC2023.png";
import vectorRight from "../assets/vector-right.png";
import vectorLeft from "../assets/vector-left.png";
import raison from "../assets/raison.png";
import imageRaison from '../assets/image_raison.png'
import anniversary from '../assets/raison1.png'
import raison2 from '../assets/raison2.png'
import raison4 from '../assets/raison4.png'
import raison5 from '../assets/raison5.png'
import raison6 from '../assets/raison6.png'
import raison3 from '../assets/school.png'
import bgraison1 from '../assets/bg_raison1.png'
import bgraison2 from '../assets/bg_raison2.png'
import bgraison3 from '../assets/bg_raison3.png'
import bgraison4 from '../assets/bg_raison4.png'
import bgraison5 from '../assets/bg_raison5.png'
import bgraison6 from '../assets/bg_raison6.png'

const Activite = () => {
  return (
    <>
      <section>
        <div className=" relative min-h-screen mt-20 lg:m-0 ">
          <img
            className="absolute  sm:w-2/3 lg:w-1/3 object-cover left-0 top-0"
            src={activiteimg}
            alt=""
          />
          <div className="relative flex items-end justify-end  font-semibold py-3 mb-10 lg:m-0">
            <div className=" uppercase text-md lg:text-4xl 2xl:text-6xl mr-8">
              <div className="flex items-center gap-2">
                <h2 className="lg:text-lightYellow text-pimaryBlue">
                  un enseignement{" "}
                </h2>
                <h2 className="bg-pimaryBlue text-white lg:w-[340px] ">
                  trilingue
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="lg:text-lightYellow text-pimaryBlue ">
                  d'excellence de{" "}
                </h2>
                <h2 className="text-pimaryBlue ">la creche au lycee</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row relative items-center justify-between gap-20  mx-8">
            <div className="flex-1">
              <img className="w-full" src={Bacimg} alt="" />
            </div>
            <div className="flex-1 2xl:text-2xl text-pimaryBlue">
              <p>
                L'enseignement trilingue adopte par notre etablissement aide nos
                eleves a developper une meilleure sensibilite communicative dans
                un environement plurilingue et multiculturel.
              </p>
              <p>
                Jeanne D'Arc Trilingue school a toujours veille a inculque a ses
                apprenants, l'adhesion aux valeurs universelles et cultive en
                eux l'art de la cohabitaion avec les citoyens du monde.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:mt-10  ">
      <div className="flex  relative items-center justify-center">
          <img src={vectorLeft} alt="" />
          <h2 className="uppercase text-2xl lg:text-5xl font-bold text-center text-pimaryBlue">
            6 raisons <br /> pour nous choisir
          </h2>
          <img src={vectorRight} alt="" />
        </div>
        <div className=" min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center  md:min-h-[70vh] lg:min-h-screen relative">
        <img
          className="absolute right-0 left-0 w-full h-full bottom-0"
          src={raison}
          alt=""
        />
           <img className="absolute h-full object-cover left-1/2 -translate-x-1/2 bottom-0" src={imageRaison} alt="" />
           {/* first part */}
           <div className=" hidden lg:flex items-center w-full mt-28    justify-between">
               <div className="flex flex-col gap-10">
                    <div className=" relative grid place-items-center left-44  p-2 ">
                        <img className="absolute w-full" src={bgraison1} alt="" />
                        <div className="flex relative items-center gap-6 justify-center p-3">
                         <img className="" src={anniversary} alt="" />
                         <p className="text-center max-w-[200px] font-semibold text-pimaryBlue ">100 ans d'histoire  et d'expertise  en education</p>

                        </div>
                    </div>
                    <div className=" relative grid place-items-center left-12  p-2 ">
                        <img className="absolute w-full" src={bgraison2} alt="" />
                        <div className="flex relative items-center gap-6 justify-center p-3">
                         <img className="" src={raison2} alt="" />
                         <p className="text-center max-w-[200px] font-semibold text-white ">Une pedagogie bienveillante et innovative</p>

                        </div>
                    </div>
                    <div className=" relative grid place-items-center  p-2 left-28 ">
                        <img className="absolute w-full" src={bgraison3} alt="" />
                        <div className="flex relative items-center gap-6 justify-center p-3">
                         <img className="" src={raison3} alt="" />
                         <p className="text-center max-w-[200px] font-semibold text-white ">Une education du 20 siecle alliant excellence et epanouissement</p>

                        </div>
                    </div>
               </div>
               {/* second part */}
               <div className="flex flex-col  gap-10">
                    <div className=" relative grid place-items-center right-44  p-2 ">
                        <img className="absolute w-full" src={bgraison4} alt="" />
                        <div className="flex relative items-center gap-6 justify-center p-3">
                         <img className="" src={raison4} alt="" />
                         <p className="text-center max-w-[200px] font-semibold text-pimaryBlue ">Des valeurs humaines au coeur de l'education</p>

                        </div>
                    </div>
                    <div className=" relative grid place-items-center  p-2 right-12 ">
                        <img className="absolute w-full" src={bgraison5} alt="" />
                        <div className="flex relative items-center gap-6 justify-center p-3">
                         <img className="" src={raison5} alt="" />
                        <p className="text-center max-w-[200px] font-semibold text-pimaryBlue ">Un enseignement personnalisee et centre autour de l'enfant</p>

                        </div>
                    </div>
                    <div className=" relative grid place-items-center  p-2  right-28">
                        <img className="absolute w-full" src={bgraison6} alt="" />
                        <div className="flex relative items-center gap-6 justify-center p-3">
                         <img className="" src={raison6} alt="" />
                         <p className="text-center max-w-[200px] font-semibold text-white ">Une ouverture au monde: Un programme d'excellence</p>

                        </div>
                    </div>
               </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Activite;
