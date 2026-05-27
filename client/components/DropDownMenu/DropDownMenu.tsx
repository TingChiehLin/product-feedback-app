"use client";

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
  onClick: (item: T, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const displayOf = <T extends string | FeedbackCategory>(item: T): string =>
  typeof item === "string" ? item : item?.type ?? "";

const DropDownMenu = <T extends string | FeedbackCategory>({
  id,
  label,
  description,
  data,
  value,
  onClick,
}: DropDownMenuProps<T>): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const selectedItem = React.useMemo(() => {
    if (typeof value === "number") {
      const item = data[value - 1];
      if (item) return displayOf(item);
    } else if (typeof value === "string" && value) {
      const item = data.find((d) => displayOf(d) === value);
      if (item) return displayOf(item);
    }
    return data[0] ? displayOf(data[0]) : "UI";
  }, [value, data]);

  React.useEffect(() => {
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

  return (
    <div ref={containerRef}>
      <label className="text-pfBlueDark text-sm font-bold" htmlFor={id}>
        {label}
      </label>
      <span className="text-pfGrayDark text-sm block mt-1">{description}</span>
      <div className="relative mt-4">
        <button
          id={id}
          type="button"
          className="relative flex justify-between w-full bg-pfGrayLight text-pfBlueDark px-6 py-3 text-[15px] rounded-[5px] cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            setIsOpen((prev) => !prev);
          }}
        >
          <span>{selectedItem}</span>
          <Image
            className={`w-3 cursor-pointer absolute top-1/2 right-6 -translate-y-1/2 transition ease-out duration-200 ${
              isOpen ? "-rotate-180" : ""
            }`}
            src={ARROW_UPIMG}
            alt="arrow-up"
            width={0}
            height={0}
            sizes="100vw"
          />
        </button>
        {isOpen && (
          <ul className="w-full shadow-lg bg-white rounded-[10px] absolute top-14 left-0 z-30">
            {data.map((item, index) => {
              const displayText = displayOf(item);
              return (
                <React.Fragment key={`${displayText}-${index}`}>
                  <li>
                    <button
                      type="button"
                      className="w-full cursor-pointer text-[15px] px-6 py-3 text-pfGrayDark hover:text-pfPurple flex justify-between items-center text-left"
                      onClick={(event) => {
                        onClick(item, event);
                        setIsOpen(false);
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
                    </button>
                  </li>
                  {index !== data.length - 1 && <hr />}
                </React.Fragment>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
