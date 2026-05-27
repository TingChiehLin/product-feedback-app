"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import ARROW_UPIMG from "../../assets/arrow_up.svg";
import TICK from "../../assets/tick.svg";
import { MenuState } from "../../lib";

interface MenuTypeProp {
  data: MenuState[];
  onClick: (menuItem: MenuState) => void;
}

const Menu: React.FC<MenuTypeProp> = ({ data, onClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const activeName = data.find((menuItem) => menuItem.isActive)?.name;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="cursor-pointer text-white hover:text-pfWhiteLight rounded-[10px] flex items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="text-sm text-pfWhiteLight flex gap-3 cursor-pointer">
          <span>
            Sort by:
            <span className="font-bold mx-2">{activeName}</span>
          </span>
        </div>
        <Image
          className={`w-2 h-2 transition ease-out duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          src={ARROW_UPIMG}
          alt="arrow_up"
          width={0}
          height={0}
        />
      </button>
      {isOpen && (
        <ul className="absolute top-10 left-0 rounded-md bg-white w-64 shadow-lg z-30">
          {data.map((menuItem, index) => (
            <li key={menuItem.name}>
              <button
                type="button"
                className="w-full text-pfGrayDark hover:text-pfPurple px-6 py-3 text-left text-[15px] flex justify-between items-center"
                onClick={() => {
                  onClick(menuItem);
                  setIsOpen(false);
                }}
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
              </button>
              {index !== data.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
