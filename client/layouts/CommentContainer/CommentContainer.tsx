import * as React from "react";

const CommentContainer = () => {
  return (
    <>
      <div>
        <span>4 Comments</span>
        <div>Comments</div>
      </div>
      <div className="">
        <span className="text-[18px] font-bold text-left">Add Comment</span>
        <input />
        <div className="flex">
          <span>250 Characters left</span>
          <button>Post Comment</button>
        </div>
      </div>
    </>
  );
};

export default CommentContainer;
