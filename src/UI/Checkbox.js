import React, { useEffect, useState } from 'react'

export default function Checkbox(props) {
    const [checked, setChecked] = useState(false);

    const handleChecked = e => {
        setChecked(curValue => !curValue);        
    }

    useEffect(()=>{
      props.wasChecked([checked, props.question.title]);
    },[checked])

  return (
    <div className="my-2 flex w-full border-[2px] border-[#EAEAEA] font-[Rubik-Regular] text-sm text-[#475467] p-2">
        <div className="w-3/4 font-[Rubik-Regular]"><div>{props.question.title} {props.question.number && `(${props.question.number})`}</div></div>
        <div className="w-1/4 flex justify-end">
            {/* <input id="checkbox" type="checkbox" value={props.question.title} className="hidden" onChange={handleChecked}/> */}
            <div className={`rounded-full border-[2px] border-[#475467] w-4 h-4 ${checked ? "bg-black" : ''}`} onClick={handleChecked}></div>
        </div>
    </div>
  )
}
