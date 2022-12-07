import { FC } from "react";

import BulbImg from '../../public/bulb.png';

export interface HeaderProp {
  isHomePage?: boolean;
}

export const Header: FC<HeaderProp> = ({ isHomePage }) => {
  return (
    <>
      {isHomePage ? (
        <div className="flex justify-between">
          <div className="flex items-center gap-4"></div>
          <button>
            <span>+ Add Feedback</span>
          </button>
        </div>
      ) : (
        <div>

        </div>
      )}
    </>
  );
};
