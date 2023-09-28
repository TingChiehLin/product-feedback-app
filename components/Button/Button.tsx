import Link from "next/link";

export type Buttons = "Add" | "Edit" | "Cancel" | "Delete";

interface ButtonTypeProp {
  text: string;
  variant: Buttons;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const buttonTypeMapper: {[k in Buttons]: string} = {
  "Add": "bg-pfPurple",
  "Edit": "bg-pfBlue",
  "Cancel": "bg-pfBlueDark",
  "Delete": "bg-pfRed",
}

const hoverColorMapper: {[k in Buttons]: string} = {
  "Add": "hover:bg-pfPinkLight",
  "Edit": "hover:bg-pfBlueDark",
  "Cancel": "hover:bg-pfBlueDarkLight",
  "Delete": "hover:bg-pfLightRed",
}

const Button: React.FC<ButtonTypeProp> = ({
  text,
  variant,
  icon,
  href,
  onClick
}) => {

  return (
    <Link href={`/${href}`}>
      <button className={`flex items-center gap-2 text-white
                          rounded-[10px] ${buttonTypeMapper[variant]} py-2 px-6
                          ${hoverColorMapper[variant]} cursor-pointer`
                        }
              onClick={onClick}
      >
        {icon}
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default Button;
