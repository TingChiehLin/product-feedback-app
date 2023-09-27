import * as React from "react";

import { CategoryType } from "../../lib";

import ARROW_UPIMG from "../../assets/arrow_up_blue.svg";
import TICK from "../../assets/tick.svg";

import Image from "next/image";

interface DropDownMenuProps {
    id: string,
    label: string,
    name: string,
    value: string[],
    description: string,
    data: CategoryType[],
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

const DropDownMenu:React.FC<DropDownMenuProps> = ({...props}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleOpen = () => { 
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <label className="text-pfBlueDark text-sm font-bold" htmlFor={props.id}>{props.label}</label>
            <span className="text-pfGrayDark text-sm block mt-1">{props.description}</span>
            <div className="relative z-10"
                 onClick={handleOpen}
            >
                <input className="  flex justify-between 
                                    w-full bg-pfGrayLight
                                    text-pfBlueDark
                                    px-6 py-3
                                    mt-4
                                    text-[15px]
                                    rounded-[5px] 
                                    cursor-pointer"
                        name={props.name}
                        value={props.data.find((item) => item.isActive)?.name}
                        placeholder="Choose a category"
                        type="button"
                        onChange={props.onChange}

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
                {isOpen && <ul className="w-full 
                                          shadow-lg 
                                        bg-white 
                                          rounded-[10px]
                                          absolute top-16 z-30"
                            >
                {
                    props.data.map((item, index) => {
                        return (
                            <>
                                <li key={item.name} 
                                    className=" cursor-pointer
                                                text-[15px]
                                                px-6 py-3 
                                                text-pfGrayDark
                                                hover:text-pfPurple
                                                flex justify-between items-center
                                               "
                                >
                                    {item.name}
                                    {item.isActive && 
                                    <Image src={TICK} alt="tick" className="w-3" width={0} height={0} sizes="100vw"/>}
                                </li>
                                {(index !== props.data.length - 1) && <hr />}
                            </>
                        )
                    })
                }
            </ul>}
            </div>
        </div>
    )
}

export default DropDownMenu;    