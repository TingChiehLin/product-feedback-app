import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

interface BackButtonPropType {
    href: string;
}

const BackButton: React.FC<BackButtonPropType> = ({ href }) => {
    return (
      <div className="flex gap-3.5 self-start">
        <Link href={href}>
          <FaAngleLeft size={"1.2rem"} className="text-pfBlueNormal" />
        </Link>
        <Link href={href}>
          <h4 className="font-bold text-sm hover:underline cursor-pointer text-pfGrayDark">
            Go Back
          </h4>
        </Link>
      </div>    
    )
}

export default BackButton;