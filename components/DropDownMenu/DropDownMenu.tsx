import * as React from "react";

import { CategoryType } from "../../lib";

import ARROW_UPIMG from "../../assets/arrow_up_blue.svg";
import TICK from "../../assets/tick.svg";

import Image from "next/image";

interface DropDownMenuProps {
    id: string,
    label: string,
    name: string,
    description: string,
    data: CategoryType[],
    onClick: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

const DropDownMenu:React.FC<DropDownMenuProps> = ({...props}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleOpen = () => { 
        setIsOpen(!isOpen);
    }

    return(
        <div className="">
            <label className="text-pfBlueDark text-sm font-bold" htmlFor={props.id}>{props.label}</label>
            <span className="text-pfGrayDark text-sm block mt-1">{props.description}</span>
            <div className="relative">
                <input className=" 
                                    flex justify-between 
                                    w-full bg-pfGrayLight
                                    text-pfBlueDark
                                    px-6 py-3 
                                    mt-4
                                    rounded-[5px] 
                                    cursor-pointer"
                        onClick={handleOpen}
                        name={props.name}
                        value={props.data.find((item) => item.isActive)?.name}
                        placeholder="Choose a category"
                        type="button"
                />
                    <Image 
                        className={`w-3 cursor-pointer 
                                    absolute top-1/2 right-[22px] -translate-y-1/2
                                    transition ease-out duration-200
                                    ${isOpen && "-rotate-180"}
                                  `} 
                        src={ARROW_UPIMG} 
                        alt="arrow-up"
                        width={0}
                        height={0}
                        sizes="100vw"
                />
            </div>
            {isOpen && <ul>
                {
                    props.data.map((item) => {
                        return (
                            <>
                                <li key={item.name} 
                                    className="
                                                pl-6 py-3 
                                                text-pfGrayDark
                                                hover:text-pfPurple"
                                >
                                    {item.name}
                                </li>
                                <hr />
                            </>
                        )
                    })
                }
            </ul>}
        </div>
    )
}

export default DropDownMenu;    