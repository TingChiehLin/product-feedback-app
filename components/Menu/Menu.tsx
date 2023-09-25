"use client";

import { useState } from "react";
import Image from "next/image";

import ARROW_UPIMG from "../../assets/arrow_up.svg";
import TICK from "../../assets/tick.svg";

interface MenuState {
  name: string;
  isActive: boolean;
}

interface MenuTypeProp {
  data: any[];
  onClick: () => void;
}

const Menu:React.FC<MenuTypeProp> = ({data, onClick}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<MenuState[]>(data);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Detect Click outside of Component
  const handleClickOutside = () => {};

  const handleState = (menuItem: MenuState) => {
    setMenuItems((prevState) => {
      return prevState.map((m) => ({
        ...menuItem,
        isActive: menuItem.name === m.name,
      }));
    });
  };

  return (
    <button
      className="relative
                 cursor-pointer text-white hover:text-pfWhiteLight 
                 tracking-wide rounded-[10px]
                 flex items-center"
      onClick={() => handleOpen()}
    >
      <div className="text-sm mr-4">
        Sort by: <span className="">Most U pvotes</span>
      </div>
      <Image
        className={`w-2 h-2 transition ease-out delay-400 ${
          isOpen && "rotate-180"
        }`}
        src={ARROW_UPIMG}
        alt="arrow_up"
        width={0}
        height={0}
      />
      {isOpen && (
        <div
          className="absolute top-8
                     rounded-md bg-white
                     w-64 shadow-lg
                    "
        >
          {menuItems.map((menuItem) => (
            <>
              <div
                key={menuItem.name}
                className="text-pfGrayDark hover:text-pfPurple 
                           px-6 py-3 text-left
                           flex justify-between items-center
                        "
                onClick={() => handleState(menuItem)}
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
