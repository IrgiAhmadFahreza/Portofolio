import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ============== Logo =============== */}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-cyan-400 text-white text-[20px] font-[500]
                    rounded-full flex items-center justify-center"
            >
              I
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700] text-blue-600">
                Irgi Ahmad Fahreza
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500] ">
                personal
              </p>
            </div>
          </div>

          {/* ================== logo end ================== */}
          {/* ================== menu Start ==================*/}
          <div className="menu">
            <ul className="flex items-center">
              <li className="mr-6">
                <a href="#home">Home</a>
              </li>
              <li className="mr-6">
                <a href="#portofolio">Portofolio</a>
              </li>
              <li className="mr-6">
                <a href="#about">About</a>
              </li>
              <li className="mr-6">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
