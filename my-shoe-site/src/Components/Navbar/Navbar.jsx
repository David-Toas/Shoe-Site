// eslint-disable-next-line no-unused-vars
import React from "react";
import nike_image from "../../assets/nike-white.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-semibold py-6 px-10">
      <div className="navRight flex gap-10">
        <img src={nike_image} alt="" className="bg-transparent" />
        <div className="navItems hidden md:flex gap-8">
          <div className="modal-menu-item hover:text-[#f5c000]">Men</div>
          <div className="modal-menu-item hover:text-[#f5c000]">Women</div>
          <div className="modal-menu-item hover:text-[#f5c000]">Kids</div>
          <div className="modal-menu-item hover:text-[#f5c000]">
            Accessories
          </div>
        </div>
      </div>
      <div className="navLeft flex gap-10">
        <div className="flex items-center gap-4 mr-[10px] group cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
          <div className="">Search</div>
        </div>
        <div className="relative cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 384 512"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"></path>
          </svg>
          <span className="absolute -bottom-2 lg:bottom-0 -right-2 min-w-5 min-h-5 text-[.8rem] py-[2px] px-2 rounded-full bg-[#f5c000] text-black">
            6
          </span>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="cursor-pointer"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
