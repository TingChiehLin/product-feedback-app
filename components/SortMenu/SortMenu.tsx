"use client";

import { useState } from "react";
import Image from "next/image";

import { MENU_ITEMS } from "../../lib/menuItems";
import ARROW_UPIMG from "../../assets/arrow_up.svg";
import TICK from "../../assets/tick.svg";

interface SortMenuItemState {
  name: string;
  isActive: boolean;
}

const SortMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<SortMenuItemState[]>(MENU_ITEMS);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect Click outside of Component
  const handleClickOutside = () => {};

  const currentStateHandler = (m: SortMenuItemState) => {
    setMenuItems((prevState) => {
      return prevState.map((menuItem) => ({
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
      onClick={() => handleOpenMenu()}
    >
      <div className="text-sm mr-[5px]">
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
          className="absolute top-16
                     rounded-md bg-white
                     w-64 shadow-lg
                    "
        >
          {menuItems.map((m) => (
            <>
              <div
                key={m.name}
                className="text-pfGrayDark hover:text-pfPurple 
                           px-6 py-3 text-left
                           flex justify-between items-center
                        "
                onClick={() => currentStateHandler(m)}
              >
                <span>{m.name}</span>
                {m.isActive && (
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

export default SortMenu;
