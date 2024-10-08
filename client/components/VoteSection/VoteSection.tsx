import * as React from "react";
import { FaAngleUp } from "react-icons/fa";

type FeildDirections = "vertical" | "horizental";

interface VoteNumberPropType {
  voteNum: number | undefined;
  fieldDirection: FeildDirections;
}

const VoteSection: React.FC<VoteNumberPropType> = ({
  voteNum,
  fieldDirection,
}) => {
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
                    bg-pfWhiteLight hover:bg-lightPurple
                    active:bg-pfBlueNormal
                      select-none 
                      group
                      cursor-pointer
                  `}
        // onClick={}
      >
        <FaAngleUp
          className="text-pfBlueNormal group-active:text-white"
          size={"1rem"}
        />
        <span className="font-bold text-sm text-pfBlueDark group-active:text-white">
          {voteNum}
        </span>
      </div>
    </>
  );
};

export default VoteSection;
