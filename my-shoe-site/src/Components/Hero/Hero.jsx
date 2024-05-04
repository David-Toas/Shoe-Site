// eslint-disable-next-line no-unused-vars
import React from "react";
import sneaker_image from "../../assets/sneaker.png";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row w-full justify-center items-center px-4 md:px-6 lg:px-28">
      <div className="flex-1 font-tw-cen-mt-condensed mb-5 md:mb-0 z-[2]">
        <p className="text-[#f5c000] tracking-[5px] text-sm">NEW COLLECTION</p>
        <div className="text-white font-bold tracking-[5px] py-7 text-2xl">
          <p className="">NEW NIKE</p>
          <p className="">REACT FLYKNIT</p>
        </div>
        <p className="text-[.9rem] py-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          incidunt quasi, soluta natus temporibus recusandae omnis vel est
          magnam dolorem.
        </p>
        <div className="flex items-center gap-2 pt-5">
          <div className="relative">
            <div className="flex gap-2 border border-gray-400 items-center py-2 px-2 text-sm font-semibold cursor-pointer">
              <span>QNT 1</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                color="#f5c000"
                style={{ color: "#f5c000" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="flex gap-2 border border-gray-400 items-center py-2 px-2 text-sm font-semibold cursor-pointer">
              <span>SIZES</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                color="#f5c000"
                style={{ color: "#f5c000" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-2 py-1 px-3 border-2 border-[#f5c000] text-[#f5c000] font-bold text-lg">
            $299
          </div>
        </div>
      </div>
      <div className="md:flex-1 lg:flex-[2]">
        <div className="md:hidden">
          <img src={sneaker_image} alt="" className="bg-transparent" />
        </div>
        <div className="hidden md:block">
          <img
            src={sneaker_image}
            alt=""
            className="-rotate-12 bg-transparent"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
