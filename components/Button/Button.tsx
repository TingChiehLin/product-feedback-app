import Link from "next/link";

export type Buttons = "Add" | "Edit" | "Cancel" | "Delete";

interface ButtonTypeProp {
  text: string;
  variant: Buttons;
  icon?: React.ReactNode;
  href?: string;
}

const buttonTypeMapper: {[k in Buttons]: string} = {
  "Add": "bg-pfPurple",
  "Edit": "bg-pfBlue",
  "Cancel": "bg-pfRed",
  "Delete": "bg-pfRed",
}

const hoverColorMapper: {[k in Buttons]: string} = {
  "Add": "hover:bg-pfPinkLight",
  "Edit": "hover:bg-pfBlueDark",
  "Cancel": "hover:bg-pfRedDark",
  "Delete": "hover:bg-pfRedDark",
}

const Button: React.FC<ButtonTypeProp> = ({
  text,
  variant,
  icon,
  href,
}) => {

  return (
    <Link href={`/${href}`}>
      <button className={`flex items-center gap-2 text-white
                          rounded-[10px] ${buttonTypeMapper[variant]} py-2 px-6
                          ${hoverColorMapper[variant]} cursor-pointer`
      }>
        {icon}
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default Button;
