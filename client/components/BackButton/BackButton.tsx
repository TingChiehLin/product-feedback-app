import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { FaAngleLeft } from "react-icons/fa";

type Buttons = "Default" | "Roadmap";

type Colors = { arrowColor: string; textColor: string };

interface BackButtonPropType {
  type?: Buttons;
  href?: string;
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
  const router = useRouter();

  const arrowColor = buttonsColorMapper[type].arrowColor;
  const textColor = buttonsColorMapper[type].textColor;

  return (
    <>
      {href ? (
        <div className="flex gap-3.5">
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
      ) : (
        <button
          className="flex gap-3.5"
          type="button"
          onClick={() => router.back()}
        >
          <FaAngleLeft size={"1.2rem"} className={arrowColor} />
          <span
            className={`block font-bold text-sm hover:underline cursor-pointer ${textColor}`}
          >
            Go Back
          </span>
        </button>
      )}
    </>
  );
};

export default BackButton;
