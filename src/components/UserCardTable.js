import React, { useEffect, useState } from "react";
import Patient1 from '../assets/patient1.jpg';
import Patient2 from '../assets/patient2.jpg';
import Patient3 from '../assets/patient3.jpg';
import Patient4 from '../assets/patient4.jpg';
import Patient5 from '../assets/patient5.jpg';
import { ReactComponent as Check } from '../assets/check.svg';
import { ReactComponent as DeleteIcon} from '../assets/delete.svg';
import { ReactComponent as Refresh } from '../assets/refresh.svg';
import {BsCheckCircle} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const UserCardTable = props => {

    const navigate = useNavigate()

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

    const handleClick = e => {
        if(props.number === "940034") {
            navigate("/patient")
        } else {
            alert("No data")
        }
    }

    return (
        <div className="flex w-full relative">
            {props.status === "Check-In" && <div className="absolute w-[10px] h-full bg-[#172667]"/>}
            {props.pic === "Patient1" && <div className="w-[11%] flex justify-center text-center font-[Rubik-Regular] text-sm text-[#475467] p-1 border-b-2 border-[#D3D3D3]"><img src={Patient1} alt="user_pic" className="w-[40px] h-[40px] rounded-full object-cover"/></div>}
            {props.pic === "Patient2" && <div className="w-[11%] flex justify-center text-center font-[Rubik-Regular] text-sm text-[#475467] p-1 border-b-2 border-[#D3D3D3]"><img src={Patient2} alt="user_pic" className="w-[40px] h-[40px] rounded-full object-cover"/></div>}
            {props.pic === "Patient3" && <div className="w-[11%] flex justify-center text-center font-[Rubik-Regular] text-sm text-[#475467] p-1 border-b-2 border-[#D3D3D3]"><img src={Patient3} alt="user_pic" className="w-[40px] h-[40px] rounded-full object-cover"/></div>}
            {props.pic === "Patient4" && <div className="w-[11%] flex justify-center text-center font-[Rubik-Regular] text-sm text-[#475467] p-1 border-b-2 border-[#D3D3D3]"><img src={Patient4} alt="user_pic" className="w-[40px] h-[40px] rounded-full object-cover"/></div>}
            {props.pic === "Patient5" && <div className="w-[11%] flex justify-center text-center font-[Rubik-Regular] text-sm text-[#475467] p-1 border-b-2 border-[#D3D3D3]"><img src={Patient5} alt="user_pic" className="w-[40px] h-[40px] rounded-full object-cover"/></div>}
            <div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#475467] pt-2 border-b-2 border-[#D3D3D3] cursor-pointer" onClick={handleClick}>{props.name}</div>
            <div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#475467] pt-2 border-b-2 border-[#D3D3D3]">{props.number}</div>
            <div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#475467] pt-2 border-b-2 border-[#D3D3D3]">{props.phone}</div>
            <div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#475467] pt-2 border-b-2 border-[#D3D3D3]">{formatAMPM(props.appDate)}</div>
            <div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#475467] pt-2 border-b-2 border-[#D3D3D3]">{props.previousVisit}</div>
            <div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#475467] pt-2 border-b-2 border-[#D3D3D3]">{props.Doctor}</div>
            {props.status === "Upcoming" &&<div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#475467] pt-2 border-b-2 border-[#D3D3D3]">{props.status}</div>}
            {props.status === "Check-In" &&<div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#4F60FF] pt-2 border-b-2 border-[#D3D3D3]">{props.status}</div>}
            {props.status === "Completed" && <div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#00CA2C] pt-2 border-b-2 border-[#D3D3D3]">{props.status}</div>}
            {props.status === "Rescheduled" &&<div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-[#FFA500] pt-2 border-b-2 border-[#D3D3D3]">{props.status}</div>}
            {props.status === "Canceled" &&<div className="w-[11%] text-left font-[Rubik-Regular] text-sm text-red pt-2 border-b-2 border-[#D3D3D3]">{props.status}</div>}
            <div className="w-[11%] flex text-left font-[Rubik-Regular] text-sm text-[#475467] py-2 border-b-2 border-[#D3D3D3]">
                <div className="p-1 bg-[#FAFBFD] border-[0.1px] border-[#D5D5D5]"><Check className={`w-[20px] h-[20px] ${props.status === "Upcoming" ?"fill-[#475467] cursor-pointer":"fill-[#BFBFBF]"}`}/></div>
                <div className="p-1 bg-[#FAFBFD] border-[0.1px] border-[#D5D5D5]"><Refresh className={`w-[20px] h-[20px] ${props.status === "Upcoming" || props.status === "Check-In" ?"fill-[#475467] cursor-pointer":"fill-[#BFBFBF]"}`}/></div>
                <div className="p-1 bg-[#FAFBFD] border-[0.1px] border-[#D5D5D5]"><DeleteIcon className={`w-[20px] h-[20px] ${props.status === "Upcoming" || props.status === "Check-In" || props.status === "Rescheduled" ?"fill-[#475467] cursor-pointer":"fill-[#BFBFBF]"}`}/></div>
            </div>
        </div>
    )
}

export default UserCardTable;