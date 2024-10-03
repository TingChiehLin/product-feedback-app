import Link from "next/link";
import React from "react";

export type Buttons = "Add" | "Edit" | "Clear" | "Delete";

interface ButtonTypeProp {
  text: string;
  variant: Buttons;
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  href?: string;
  slug?: string;
  onClick?: () => void;
}

const buttonTypeMapper: { [k in Buttons]: string } = {
  Add: "bg-pfPurple",
  Edit: "bg-pfBlueNormal",
  Clear: "bg-pfBlueDark",
  Delete: "bg-pfRed",
};

const hoverColorMapper: { [k in Buttons]: string } = {
  Add: "hover:bg-pfPinkLight",
  Edit: "hover:bg-pfBlueDark",
  Clear: "hover:bg-pfBlueDarkLight",
  Delete: "hover:bg-pfLightRed",
};

const Button: React.FC<ButtonTypeProp> = ({
  text,
  variant,
  type,
  icon,
  href,
  slug,
  onClick,
}) => {
  return (
    <>
      {href ? (
        <Link href={`/${href}${slug ? "/" + slug + "/edit" : ""}`}>
          <button
            className={`flex items-center gap-2 text-white
                            rounded-[10px] ${buttonTypeMapper[variant]} py-2 px-6
                            ${hoverColorMapper[variant]} cursor-pointer`}
            type={type}
            onClick={onClick}
          >
            {icon}
            <span>{text}</span>
          </button>
        </Link>
      ) : (
        <button
          className={`flex items-center gap-2 text-white
                            rounded-[10px] ${buttonTypeMapper[variant]} py-2 px-6
                            ${hoverColorMapper[variant]} cursor-pointer`}
          type={type}
          onClick={onClick}
        >
          {icon}
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
