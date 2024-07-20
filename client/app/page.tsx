"use client";

import React, { useContext } from "react";
import { FeedbackContext } from "../store/product-feedback-context";

import Link from "next/link";
import Image from "next/image";

import { MENU_ITEMS, MenuState } from "../lib/menuItems";
import BULBIMG from "../assets/bulb.svg";
import NO_FEEDBACK from "../assets/nofeedback.svg";

import { FaPlus } from "react-icons/fa";
import { process, tags } from "../lib";
import Tag from "../components/Tag";
import Process from "../components/ProcessStatus";
import Button from "../components/Button";

import Menu from "../components/Menu";
import FeedbackItem from "../components/FeedbackItem";
import { COMMENTS } from "../lib/comments";

const gradientBG = {
  width: "255px",
  height: "137px",
  background:
    "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
  borderRadius: "10px",
};

const Home = () => {
  const id = React.useId();
  const fbCtx = useContext(FeedbackContext);

  const [values, setValues] = React.useState<MenuState[]>(MENU_ITEMS);

  const handleValues = (m: MenuState) => {
    setValues((prevState) => {
      return prevState.map((menuItem) => ({
        ...menuItem,
        isActive: menuItem.name === m.name,
      }));
    });
  };

  return (
    <div className="flex">
      <aside className="mr-[30px]">
        <figure
          id="broder-title"
          style={gradientBG}
          className="text-white relative"
        >
          <div className="absolute bottom-6 left-6">
            <figcaption className="font-bold text-xl">
              Frontend Mentor
            </figcaption>
            <figcaption className="font-light text-sm">
              Feedback Board
            </figcaption>
          </div>
        </figure>
        <div
          id="broder-tag"
          className="bg-pfWhite shadow w-64 h-auto px-6 py-6 my-6 rounded-[10px] flex justify-start flex-wrap gap-x-2 gap-y-[14px]"
        >
          {tags.map((t) => (
            <Tag key={t.text} text={t.text} isActive={true} />
          ))}
        </div>
        <div
          id="roadmap-process"
          className="w-64 px-6 py-6 bg-white rounded-[10px] shadow"
        >
          <div className="flex justify-between items-center mb-6 ">
            <h1 className="font-bold text-lg text-pfBlue_dark">Roadmap</h1>
            <Link
              href="/roadmap"
              className="text-sm text-pfBlue_normal text-[#8397F8] hover:underline hover:text-pfGrayDark cursor-pointer"
            >
              View
            </Link>
          </div>
          {process.map((p) => (
            <Process key={p.title} title={p.title} number={p.number} />
          ))}
        </div>
      </aside>
      <div className="w-full">
        <div
          className="w-full h-[72px] rounded-[10px] bg-pfBluePrimary
                       pl-6 pr-4 py-[14px]
                       flex justify-between items-center
                    "
        >
          <nav className="flex items-center gap-[38px]">
            <div className="flex gap-4">
              <Image
                className="w-6 h-6"
                src={BULBIMG}
                alt="bulb"
                width={24}
                height={24}
                priority={true}
              />
              <h1 className="text-white text-lg font-bold">
                <span>{fbCtx.feedbacks.length}</span> Suggestions
              </h1>
            </div>
            <Menu data={values} onClick={handleValues} />
          </nav>
          <Button
            text={"Add Feedback"}
            icon={<FaPlus color="white" size="0.8rem" />}
            href={"add"}
            type="button"
            variant={"Add"}
          />
        </div>
        {fbCtx.feedbacks.length === 0 ? (
          <div className="w-full h-full flex justify-center items-center bg-wgite mt-6 shadow rounded-[10px]">
            <div className="w-full xl:max-w-[480px] flex items-center flex-col">
              <Image
                className="h-auto mb-14"
                src={NO_FEEDBACK}
                alt="not_found_feedback"
                width={130}
                height={136}
              />
              <h3 className="font-bold text-2xl mb-4">
                There is no feedback yet.
              </h3>
              <p className="w-full mb-12 text-center text-pfGrayDark tracking-wide">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
              <Button
                text={"Add Feedback"}
                icon={<FaPlus color="white" size="0.8rem" />}
                variant={"Add"}
                type="button"
              />
            </div>
          </div>
        ) : (
          <div className="mt-6">
            {fbCtx.feedbacks.map((feedback) => (
              <FeedbackItem
                key={feedback.id}
                title={feedback.title}
                description={feedback.description}
                voteNum={feedback.voteNum}
                tagName={feedback.tagName}
                isActive={feedback.isActive}
                feedbackNum={feedback.commentNum}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
