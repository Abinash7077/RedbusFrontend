import React from "react";

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="Header w-full px-[55px]  h-[60px] flex items-center relative z-10  shadow-[0px_0px_4px_1px_gray] justify-between  ">
      <HeaderLeft/>
      <HeaderRight/>
    </div>
  );
};

export default Header;
