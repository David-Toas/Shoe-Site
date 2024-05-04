// eslint-disable-next-line no-unused-vars
import React from "react";
import sneaker_image from "../../assets/sneaker.png";

const Down = () => {
  return (
    <div className="px-4 md:px-6 lg:px-28 flex justify-center md:justify-between items-end">
      <div className="hidden md:flex flex-col items-center">
        <div className="flex justify-around">
          <div className="cursor-pointer">
            <img
              src={sneaker_image}
              alt=""
              className="w-[50px] h-[30px] bg-transparent"
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={sneaker_image}
              alt=""
              className="w-[50px] h-[30px] bg-transparent"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-[60px] h-[50px] grid place-items-center bg-gray-700 font-bold text-[#f5c000] cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
            </svg>
          </div>
          <div className="w-[60px] h-[50px] grid place-items-center bg-gray-700 font-bold text-[#f5c000] ml-1 cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[50px] grid place-items-center bg-gray-700 font-bold text-[#f5c000] cursor-pointer">
        ADD TO CART
      </div>
    </div>
  );
};

export default Down;
