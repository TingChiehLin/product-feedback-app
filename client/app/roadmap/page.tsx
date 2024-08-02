"use client";

import { FC, useContext } from "react";

import { FeedbackContext } from "../../store/product-feedback-context";
import { roadmapsections } from "../../lib";

import Button from "../../components/Button";
import RoadMapSection from "../../components/RoadMapSection";
import Link from "next/link";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import BackButton from "@/components/BackButton";

const RoadMap: FC = () => {
  const fbCtx = useContext(FeedbackContext);
  return (
    <>
      <div
        className="w-full h-[113px] px-8 py-7
                 bg-pfBluePrimary
                  flex justify-between
                  rounded-[10px]
                  shadow
       "
      >
        <div>
          <div className="flex gap-3.5">
            <BackButton href={"/"} />
          </div>
          <h3 className="font-bold text-white text-2xl mt-2">RoadMap</h3>
        </div>
        <Button
          text={"Add Feedback"}
          icon={<FaPlus color="white" size="0.8rem" />}
          href={"add"}
          type="button"
          variant={"Add"}
        />
      </div>
      <div className="w-full mt-12 flex gap-7.5">
        {roadmapsections.map((r) => (
          <RoadMapSection
            key={r.title}
            title={r.title}
            subTitle={r.subTitle}
            status={r.status}
            data={fbCtx.feedbacks}
          />
        ))}
      </div>
    </>
  );
};

export default RoadMap;
