"use client";

import Link from 'next/link';

const CustomButton = () => {
  return (
    <Link href="/blog">
      <button className="flex w-[200px] h-fit bg-[#1d2129] rounded-[40px] shadow-lg shadow-gray-300 dark:shadow-gray-950 justify-between items-center border-none cursor-pointer group hover:bg-[#252932] transition-colors">
        <span className="w-[155px] h-full flex items-center justify-center text-white text-[1.1em] tracking-[1.2px]">
          Read Articles
        </span>
        <span className="w-[45px] h-[45px] bg-[#f59aff] flex items-center justify-center rounded-full border-[3px] border-[#1d2129] group-hover:border-[#252932] transition-colors">
          <svg 
            width={16} 
            height={19} 
            viewBox="0 0 16 19" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="animate-none group-hover:animate-arrow"
          >
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
          </svg>
        </span>
      </button>
    </Link>
  );
}

export default CustomButton; 