import * as React from "react";

import ARROW_UPIMG from "../../assets/arrow_up_blue.svg";
import TICK from "../../assets/tick.svg";

import Image from "next/image";

import { FeedbackCategory } from "@/query/usecategory";

interface DropDownMenuProps<T> {
  id: string;
  label: string;
  name: string;
  description: string;
  data: T[];
  value: number | string;
  onClick: (item: T, event: React.MouseEvent<HTMLLIElement>) => void;
}

const DropDownMenu = <T extends string | FeedbackCategory>({
  ...props
}: DropDownMenuProps<T>): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<string>(
    props.data.length > 0
      ? typeof props.data[0] === "string"
        ? props.data[0]
        : props.data[0]?.type ?? "UI"
      : "UI"
  );

  function changeSelectedCategory(type: string) {
    setSelectedItem(type);
  }

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
        <span>{selectedItem}</span>
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
              const displayText =
                typeof item === "string" ? item : item.type ?? "";
              return (
                <React.Fragment key={`${displayText}-${index}`}>
                  <li
                    className={`cursor-pointer
                                text-[15px]
                                px-6 py-3 
                                text-pfGrayDark
                                hover:text-pfPurple
                                flex justify-between items-center
                              `}
                    id={typeof item === "string" ? item : item.type}
                    value={typeof item === "string" ? item : item.id}
                    onClick={(event) => {
                      changeSelectedCategory(displayText);
                      props.onClick(item, event);
                    }}
                  >
                    {displayText}
                    {displayText === selectedItem && (
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
                  {index !== props.data.length - 1 && (
                    <hr key={`hr-${index}`} />
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        )}
      </button>
    </div>
  );
};

export default DropDownMenu;
