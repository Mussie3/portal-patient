import React, { useEffect, useState } from "react";
import group from '../assets/Group.svg';
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import Calendar from '../assets/calendar_ap.svg';
import Patients from '../assets/Patients.svg';
import reservation from  '../assets/reservation.svg';
import PatientsRegister from '../assets/PatientsRegistered.svg'

const DataCard = props => {

    const [negative, setNegative] = useState(false);
    const [logo, setLogo] = useState();

    useEffect(()=>{
        if (props.percentage < 0) {
            setNegative(true);
        } 
        if (props.title === "annual total patients") {
            setLogo(PatientsRegister);
        } else if (props.title === "monthly total patients") {
            setLogo(Patients);   
        } else if (props.title === 'missed appointments') {
            setLogo(Calendar)
        } else {
            setLogo(reservation)
        }
    },[]);


    
    return (
        <div className="bg-white h-[130px] m-1 w-full p-2 shadow-xl shadow-[rgba(0, 0, 0, 0.05)]">
            <div className="flex w-full py-2">
                <div className="w-3/4">
                    <div className="text-[16px] font-[Rubik-Regular] uppercase">{props.title}</div>
                    <div className="text-[24px] font-[Rubik-SemiBold] text-[#475467]">{props.number}</div>      
                </div>
                <div className="w-1/4 p-4"><img src={logo} alt="group-image" className="w-11 h-8"/></div>
                </div>
            <div>
                    {!negative 
                        ? <div className="flex"><div className="p-1 pt-3"><img src={up} alt="increase_icon"/></div><div className="p-1">{props.percentage}</div><div className="p-1">up from last {props.rep}.</div></div>
                        : <div className="flex"><div className="p-1 pt-3"><img src={down} alt="decrease_icon"/></div><div className="p-1">{(props.percentage)*-1}</div><div className="p-1">down from last {props.rep}.</div></div>
                    } 
            </div>
            
        </div>
    );
}

export default DataCard