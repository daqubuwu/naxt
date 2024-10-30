"use client";
import React from "react";

const Header = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-2 text-xl md:text-2xl sticky top-0 z-50 bg-white shadow">
      <div className="header-logo">DAQ</div>
      <nav className="header-nav flex items-center gap-5">
        <div className="header-theme cursor-pointer" onClick={toggleTheme}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 1049.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M6015 12789 c-740 -46 -1469 -219 -2145 -509 -284 -121 -817 -407
              -985 -528 -22 -15 -108 -77 -191 -136 -179 -126 -366 -275 -521 -412 -163
              -144 -375 -344 -398 -375 -11 -15 -63 -74 -115 -131 -1223 -1342 -1815 -3153
              -1624 -4968 153 -1459 796 -2809 1835 -3849 665 -665 1429 -1156 2315 -1486
              406 -151 865 -268 1304 -330 341 -48 510 -59 900 -59 374 -1 519 8 810 45 85
              11 182 23 215 25 33 3 121 19 195 35 707 160 1097 293 1625 554 386 191 672
              366 1000 612 261 196 285 223 237 271 -17 17 -43 20 -233 25 -1742 51 -3386
              839 -4545 2177 -1184 1368 -1717 3206 -1453 5010 218 1494 969 2854 2124 3849
              116 100 115 98 115 132 0 52 -22 59 -186 58 -82 -1 -207 -6 -279 -10z"
              />
            </g>
          </svg>
        </div>
        <div className="header-menu cursor-pointer">
          <svg
            width="21px"
            height="21px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
