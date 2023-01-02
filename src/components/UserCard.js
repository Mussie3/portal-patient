import React, { useEffect, useState } from 'react';
import {IoIosMale, IoIosFemale} from "react-icons/io";

const UserCard = (props) => {

  const [selected, setSelected] = useState(false);
  
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  useEffect(()=>{
    if(props.patient_id) {
      if(props.patient_id === props.number)
      setSelected(true);
    } else {
      setSelected(false);
    }

  },[])

  return (
    <div className={`flex h-[48px] ${selected ? "bg-[#EDEEF0]" : "bg-white"} w-full pt-3`}>
        {props.status === 'Upcoming' && <div className="p-0.5 pt-2 w-[5%]"><div className={`bg-[#475467] w-2 h-2 rounded-full`}/></div>}
        {props.status === 'Completed' && <div className="p-0.5 pt-2 w-[5%]"><div className={`bg-[#00CA2C] w-2 h-2 rounded-full`}/></div>}
        {props.status === 'Rescheduled' && <div className="p-0.5 pt-2 w-[5%]"><div className={`bg-[#FFA500] w-2 h-2 rounded-full`}/></div>}
        {props.status === 'Check-In' && <div className="p-0.5 pt-2 w-[5%]"><div className={`bg-[#4F60FF] w-2 h-2 rounded-full`}/></div>}
        {props.status === 'Canceled' && <div className="p-0.5 pt-2 w-[5%]"><div className={`bg-[#FF0000] w-2 h-2 rounded-full`}/></div>}
        <div className={"text-xs font-[Rubik-Regular] p-1 w-[40%]"}>{props.name}</div>
        {props.gender === 'female' ? <div className={"text-xs font-[Rubik-Regular] p-1 px-4 w-[5%]"}><IoIosFemale className="text-lg p-[2px]"/></div>: <div className={"text-xs font-[Rubik-Regular] p-1 px-4 w-[5%]"}><IoIosMale className="text-lg p-[2px]"/></div>}
        <div className="text-xs font-[Rubik-Regular] p-1 w-[20%] flex justify-center">{props.number}</div>
        <div className="text-xs font-[Rubik-Regular] p-1 w-[30%]">{formatAMPM(props.date)}</div>
    </div>
  )
}

export default UserCard;
