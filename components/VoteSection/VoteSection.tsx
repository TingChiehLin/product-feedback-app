import { FC } from "react";
import { FaAngleUp } from "react-icons/fa";

type FeildDirections = "vertical" | "horizental";

interface VoteNumberPropType {
  voteNum: number;
  fieldDirection: FeildDirections;
}

const VoteNumber: FC<VoteNumberPropType> = ({ voteNum, fieldDirection }) => {
  return (
    <>
      <div
        className={`
                    ${
                      fieldDirection === "vertical"
                        ? "w-10 h-14 flex-col "
                        : "w-[70px] h-10 gap-[12.5px]"
                    }
                      flex items-center justify-center 
                      rounded-[10px] 
                    bg-pfWhiteLight hover:bg-pfBlue_darkLight
                    active:bg-pfBlue_normal
                      cursor-pointer
                      select-none 
                      group
                  `}
      >
        <FaAngleUp
          className="text-pfBlue_normal group-active:text-white"
          size={"1rem"}
        />
        <span className="font-bold text-sm text-pfBlue_dark group-active:text-white">
          {voteNum}
        </span>
      </div>
    </>
  );
};

export default VoteNumber;
