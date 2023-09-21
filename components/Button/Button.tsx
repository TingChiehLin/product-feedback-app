import Link from "next/link";

interface ButtonTypeProp {
  text: string;
  variant?: "Normal" | "Cancel" | "Delete";
  icon?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonTypeProp> = ({
  text,
  variant = "Normal",
  icon,
  href,
}) => {
  let styles;
  if (variant === "Normal") {
    styles =
      "py-3 px-6 rounded-[10px] bg-pfPink hover:bg-pfPink_light cursor-pointer";
  }
  return (
    <Link href={`/${href}`}>
      <button className={`flex items-center gap-2 text-white ${styles}`}>
        {icon}
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default Button;
