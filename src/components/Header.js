import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.svg';
import bell from '../assets/bell.svg';
import nurse from '../assets/Nurse.jpg';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io';
import {BsPerson} from 'react-icons/bs';
import {AiOutlineSetting} from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi';
import Context from '../store/Context';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

  const userContext = useContext(Context);
  const navigate = useNavigate()

  const [dropdown, setDropdown] = useState(false);

  const handleLogout = () => {
    userContext.logout();
  }

  const handleOpen = () => {
    setDropdown(true);
    props.value(true);
  }

  const handleClose = () => {
    setDropdown(false);
    props.value(false);
  }

  return (
      <div>
          <div className="flex w-full h-[10vh] bg-white">
          <div className="flex w-1/3 pt-4 pl-4">
            <img src={Logo} alt="logo" className="w-[187px]" onClick={()=>{navigate("/")}}/>
          </div>
          <div className="flex w-2/3 justify-end mr-4">
            <div>
              <div className="relative p-5 mr-2">
                <div className=""><img src={bell} alt="bell_logo" className="w-6"/></div>
                <div className="absolute right-[11px] top-[15px] rounded-full bg-red flex justify-center text-white text-[9.5px] w-[18px] h-[18px] p-0.5 cursor-pointer">
                  <div className='font-[Rubik-Regular] text-clip overflow-hidden'>99</div>
                </div>
              </div>
            </div>
            <div className="p-4 flex">
              <div><img src={nurse} className="rounded-full w-[40px] h-[40px] object-cover" alt="profile_image"/></div>
              <div className="pl-2">
                <div className="text-[14px] font-[Rubik-semiBold] text-[#404040]">Jane Doe</div>
                <div className="text-[10px] font-[Rubik-Regular] text-[#565656]">Nurse</div>
              </div>
              </div>
              <div className="p-5">
                {!dropdown 
                  ?<IoIosArrowDropdown className="text-2xl text-[rgba(86, 86, 86, 0.6)]" onClick={handleOpen}/>
                  :<IoIosArrowDropup className="text-2xl text-[rgba(86, 86, 86, 0.6)]" onClick={handleClose}/>
                }
              </div>
              {dropdown && 
                <div className="w-60 h-52 absolute z-10 right-[44px] top-[100px] bg-white shadow-lg">
                  <div>
                    <div className="flex p-3 pl-4">
                      <div classname="relative">
                        <img src={nurse} className="rounded-full w-[40px] h-[40px] object-cover" alt="profile_image"/>
                        <div className="w-2.5 h-2.5 rounded-full bg-green absolute top-[40px] left-[45px]"></div>
                      </div>
                      <div className="pl-2">
                        <div className="text-[14px] font-[Rubik-semiBold] text-[#404040]">Jane Doe</div>
                        <div className="text-[10px] font-[Rubik-Regular] text-[#565656]">jane.doe101@gmail.com</div>
                      </div>
                    </div>
                    <hr/>
                  </div>
                  <div className="text-[14px] font-[Rubik-Regular] text-[#565656] p-3 flex cursor-pointer"><span className="px-1"><BsPerson className="text-lg"/></span> View profile</div>
                  <div className="text-[14px] font-[Rubik-Regular] text-[#565656] p-3 flex cursor-pointer"><span className="px-1"><AiOutlineSetting className='text-lg'/></span> Settings</div>
                  <hr/>
                  <div className="flex">
                    <div className="text-[14px] font-[Rubik-Regular] text-[#565656] p-3 flex cursor-pointer" onClick={handleLogout}><span className="px-1"><FiLogOut className="text-lg"/></span> Log out</div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

  )
}

export default Header;
