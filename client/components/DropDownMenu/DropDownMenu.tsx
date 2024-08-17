import * as React from "react";

import ARROW_UPIMG from "../../assets/arrow_up_blue.svg";
import TICK from "../../assets/tick.svg";

import Image from "next/image";

import { CategoryType, StatusType } from "@/lib";

interface DropDownMenuProps {
  id: string;
  label: string;
  name: string;
  description: string;
  data: CategoryType[] | StatusType[];
  onClick: (
    item: CategoryType | StatusType,
    event: React.MouseEvent<HTMLLIElement>
  ) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="text-pfBlueDark text-sm font-bold" htmlFor={props.id}>
        {props.label}
      </label>
      <span className="text-pfGrayDark text-sm block mt-1">
        {props.description}
      </span>
      <button
        className="relative
                    flex justify-between 
                    w-full bg-pfGrayLight
                    text-pfBlueDark
                    px-6 py-3
                    mt-4
                    text-[15px]
                    rounded-[5px] 
                    cursor-pointer"
        onClick={(event) => handleOpen(event)}
      >
        <span>{props.data.find((item) => item.isActive)?.name}</span>
        <Image
          className={`w-3 cursor-pointer 
                                    absolute top-1/2 right-6 -translate-y-1/2
                                    transition ease-out duration-200
                                    ${isOpen && "-rotate-180"}
                                    `}
          src={ARROW_UPIMG}
          alt="arrow-up"
          width={0}
          height={0}
          sizes="100vw"
        />
        {isOpen && (
          <ul
            className="w-full 
                      shadow-lg 
                      bg-white 
                      rounded-[10px]
                      absolute top-16 left-0 z-30"
          >
            {props.data.map((item, index) => {
              return (
                <>
                  <li
                    key={item.name}
                    className="cursor-pointer
                              text-[15px]
                              px-6 py-3 
                              text-pfGrayDark
                              hover:text-pfPurple
                              flex justify-between items-center
                              "
                    id={item.name}
                    value={item.name}
                    onClick={(event) => props.onClick(item, event)}
                  >
                    {item.name}
                    {item.isActive && (
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
                </>
              );
            })}
          </ul>
        )}
      </button>
    </div>
  );
};

export default DropDownMenu;
