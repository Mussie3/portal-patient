import React, { useState } from 'react';
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const DropDown = (props) => {

    console.log(props)

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <div className="w-full py-1 px-2">
    <div className="w-full border-[2px] border-[#EAEAEA]">
        <div className="flex w-full font-[Rubik-Regular] text-[13px] text-[#475467] p-1">
            <div className="flex w-[90%]">{props.question}</div>
            <div className="flex w-[10%]">
                {!open && <div className="flex justify-end w-full"><FiChevronDown className="p-1 text-xl" onClick={handleOpen}/></div>}
                {open && <div className="flex justify-end w-full"><FiChevronUp className="p-1 text-xl"  onClick={handleClose}/></div>}
            </div>
        </div>
        {open && <div className="flex w-full justify-center font-[Rubik-Regular] text-[13px] text-[#475467] bg-[#FAFAFA] border-[2px] border-[#EAEAEA]">{props.answer}</div>}
    </div>
    
</div>
  )
}

export default DropDown;
