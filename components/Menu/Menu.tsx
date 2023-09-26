"use client";

import { useState } from "react";
import Image from "next/image";

import ARROW_UPIMG from "../../assets/arrow_up.svg";
import TICK from "../../assets/tick.svg";
import { MenuState } from "../../lib";

interface MenuTypeProp {
  data: any[];
  handleClick: (menuItem:MenuState) => void;
}

const Menu:React.FC<MenuTypeProp> = ({data, handleClick}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Detect Click outside of Component
  const handleClickOutside = () => {};

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button
      className="relative
                 cursor-pointer text-white hover:text-pfWhiteLight 
                 tracking-wide rounded-[10px]
                 flex items-center"
      onClick={handleOpen}
    >
      <div className="text-sm text-pfWhiteLight flex gap-3 cursor-pointer">
        <span>Sort by: 
          <span className="font-bold mx-2">
            {
              data.find((menuItem) => menuItem.isActive)?.name
            }
          </span>
        </span>
      </div>
      <Image
        className={`w-2 h-2 transition ease-out delay-400 ${
                    isOpen && "rotate-180"}
                  `}
        src={ARROW_UPIMG}
        alt="arrow_up"
        width={0}
        height={0}
      />
      {isOpen && (
        <div
          className="absolute top-10
                     rounded-md bg-white
                     w-64 shadow-lg
                    "
        >
          {data.map((menuItem) => (
            <>
              <div
                key={menuItem.name}
                className="text-pfGrayDark hover:text-pfPurple 
                           px-6 py-3 text-left
                           flex justify-between items-center
                        "
                onClick={() => handleClick(menuItem)}
              >
                <span>{menuItem.name}</span>
                {menuItem.isActive && (
                  <Image src={TICK} alt="tick" width={11} height={7.5} />
                )}
              </div>
              <hr />
            </>
          ))}
        </div>
      )}
    </button>
  );
};

export default Menu;
