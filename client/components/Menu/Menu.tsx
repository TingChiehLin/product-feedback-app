"use client";

import { useState } from "react";
import Image from "next/image";

import ARROW_UPIMG from "../../assets/arrow_up.svg";
import TICK from "../../assets/tick.svg";
import { MenuState } from "../../lib";

interface MenuTypeProp {
  data: MenuState[];
  onClick: (menuItem: MenuState) => void;
}

const Menu: React.FC<MenuTypeProp> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Detect Click outside of Component
  const handleClickOutside = () => {};

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="relative
                 cursor-pointer text-white hover:text-pfWhiteLight 
                 rounded-[10px]
                 flex items-center"
      onClick={handleOpen}
    >
      <div className="text-sm text-pfWhiteLight flex gap-3 cursor-pointer">
        <span>
          Sort by:
          <span className="font-bold mx-2">
            {props.data.find((menuItem) => menuItem.isActive)?.name}
          </span>
        </span>
      </div>
      <Image
        className={`w-2 h-2 transition ease-out duration-200 ${
          isOpen && "rotate-180"
        }
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
          {props.data.map((menuItem, index) => (
            <ul key={menuItem.name + index}>
              <li
                className="text-pfGrayDark hover:text-pfPurple 
                           px-6 py-3 text-left
                           text-[15px]
                           flex justify-between items-center
                        "
                onClick={() => props.onClick(menuItem)}
              >
                <span>{menuItem.name}</span>
                {menuItem.isActive && (
                  <Image
                    src={TICK}
                    alt="tick"
                    className="w-3"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                )}
              </li>
              {index !== props.data.length - 1 && <hr />}
            </ul>
          ))}
        </div>
      )}
    </button>
  );
};

export default Menu;
