import React, { useState } from 'react'
import notepad from '../assets/notepad.svg';
import calendar from '../assets/calendar.svg';
import Header from './Header';
import { RxCross1 } from 'react-icons/rx';
import {FaCalendarDay} from "react-icons/fa"
import UserCard from './UserCard';

const Layout = props => {
  const [blur, setBlur]= useState(false);
  const [clicked, setClicked] = useState(false);

  const handleBlur = e => {
    setBlur(e);
  }

  const handleInput = () => {
    setClicked(curValue => !curValue);
  } 
  return (
        <div>
            <Header value={handleBlur}/>
            <div className={`${props.BlurHandler || blur ?  "w-full h-[90vh] flex blur-sm" : "w-full h-[90vh] flex blur-none"}`}>
              <div className="w-1/6 h-[90vh] bg-white pt-8">
                <div className="flex bg-[#172667] h-[48px]">
                {!clicked ?
                  <div className="flex w-full pt-1">
                    <div className="w-1/4 flex justify-center pt-3"><img src={notepad} alt="notepad_logo" className="w-[13px] h-[18px]"/></div>
                    <div className="w-1/2 text-white font-[Rubik-Medium] uppercase text-[14px] pt-3">Patient View</div>
                    <div className="w-1/4 pt-3 px-3 flex justify-end"><img src={calendar} alt="Calendar_logo" className='w-[15px] h-[15px] cursor-pointer' onClick={handleInput}/></div>
                  </div> :
                  <div className="flex w-full">
                    <div className="w-3/4 pt-2 px-2 relative">
                      <input type="text" className="w-full font-[Rubik-Regular] text-sm h-[30px] px-2 rounded-md border-[1px]" placeholder='MM/DD/YYYY'/>
                      <div className="absolute top-[15px] right-[15px]"><FaCalendarDay className="text-[#172667] text-md"/></div>
                    </div>
                    <div className="w-1/4 p-3 pt-4"><RxCross1 className="text-white text-lg cursor-pointer" onClick={handleInput}/></div>
                  </div>
                }  
                </div>
                <div class="w-full h-[500px] scrollbar-thin scrollbar-thumb-gray scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <div class="w-full bg-white">
                      {
                        props.patients.map((patient)=>
                          <UserCard
                          patient_id={props.patient}
                          key={patient.id}
                          name={patient.name}
                          number={patient.number}
                          status={patient.status}
                          date={patient.appDate}
                          gender={patient.gender}
                          />
                        )
                      }
                    </div>
                </div>
              </div>
              <div className="w-5/6 h-[90vh] bg-[#F3F5F9]">
                  {props.children}
              </div>
            </div>
        </div>
        
  )
}

export default Layout;
