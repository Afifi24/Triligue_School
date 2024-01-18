import React from "react";
import vectorRight from "../assets/vector-right.png";
import vectorLeft from "../assets/vector-left.png";
import child1 from "../assets/early.png";
import child2 from "../assets/primary.png";
import child3 from "../assets/lower-secondary.png";
import child4 from "../assets/upper-secondary.png";
const Cycles = () => {
  return (
    <section>
      <div className="flex items-center gap-14 mt-10 w-[80%] 2xl:w-[60%] 2xl:gap-44 m-auto">
        <div className="text-red-500 font-bold text-2xl lg:text-4xl">
          <p>
            Photos will <br className="hidden lg:block" />
            be changed
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={vectorLeft} alt="" />
          <h2 className="uppercase text-2xl lg:text-5xl font-bold text-center text-pimaryBlue">
            nos cycles
          </h2>
          <img src={vectorRight} alt="" />
        </div>
      </div>

      {/* children */}
      <div className="mt-10 grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1">
        <div className=" relative">
          <img src={child1} alt="Child 1" className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"/>
          <div className="absolute bottom-12 left-8 text-white">
          <h2 className="text-4xl  font-bold ">Creche maternelle</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                
          </div>
        </div>
        <div className="relative">
          <img src={child2} alt="Child 2" className="w-full h-auto"  />
          <div className="inset-0 absolute bg-red-900 bg-opacity-50"/>
          <h2 className="text-4xl absolute bottom-12 left-8 font-bold text-white">Primaire</h2>

        </div>
        <div className="relative">
          <img src={child3} alt="Child 3" className="w-full h-auto"  />
          <div className="inset-0 absolute bg-blue-900 bg-opacity-25 "/>
          <h2 className="text-4xl absolute bottom-12 left-8 font-bold text-white">College</h2>
        </div>
        <div className="relative">
          <img src={child4} alt="Child 4" className="w-full h-auto" />
          <div className="inset-0 absolute bg-black bg-opacity-25"/>
          <h2 className="text-4xl absolute bottom-12 left-8 font-bold text-white">Lycee</h2>
        </div>
      </div>
    </section>
  );
};

export default Cycles;
