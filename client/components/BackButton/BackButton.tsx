import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

type Buttons = "Default" | "Roadmap";

type Colors = { arrowColor: string; textColor: string };

interface BackButtonPropType {
  type?: Buttons;
  href: string;
}

const buttonsColorMapper: {
  [key in Buttons]: Colors;
} = {
  Default: {
    arrowColor: "text-pfBlueNormal",
    textColor: "text-pfGrayDark",
  },
  Roadmap: {
    arrowColor: "text-white",
    textColor: "text-white",
  },
};

const BackButton: React.FC<BackButtonPropType> = ({
  type = "Default",
  href,
}) => {
  const arrowColor = buttonsColorMapper[type].arrowColor;
  const textColor = buttonsColorMapper[type].textColor;
  return (
    <div className="flex gap-3.5 self-start">
      <Link href={href}>
        <FaAngleLeft size={"1.2rem"} className={arrowColor} />
      </Link>
      <Link href={href}>
        <span
          className={`block font-bold text-sm hover:underline cursor-pointer ${textColor}`}
        >
          Go Back
        </span>
      </Link>
    </div>
  );
};

export default BackButton;
