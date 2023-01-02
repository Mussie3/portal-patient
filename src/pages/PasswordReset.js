import React, { useState } from 'react';
import Background from '../UI/Background';
import Logo from '../assets/Logo.svg';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const PasswordReset = props => {
    const navigate = useNavigate()

    const [successful, setSuccessful] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setSuccessful(true);
        setTimeout(()=>{
            setSuccessful(false);
        }, 3000);
        setTimeout(()=>{navigate("/code");}, 3500);
        
    }
  return (
        <Background>
            <div className="flex justify-center w-full p-4 pb-2 mb-6">
                <div><img src={Logo} alt="Clionic-logo" className="w-[317px] h-[131px]"/></div>
            </div>
            <div className="px-10 font-[Rubik-Bold] text-xl text-[#475467]">PASSWORD RESET</div>
            <div className="px-10 font-[Rubik-Regular] text-sm text-[#475467] mb-4">A verification code will be sent to your email.</div>
            <form onSubmit={handleSubmit} className="p-10 pt-2">
                <div className="pb-2"><label htmlFor="email" className="font-[Rubik-Medium] text-md text-[#172667] text-sm">Email</label></div>
                <div className="pb-2"><input type="email" id="email" className="w-full border-[1px] border-[rgba(23, 38, 103, 0.5)] h-10 py-2 px-3" placeholder="example@email.com"/></div>
                {successful && <div className="flex mt-1 mb-4 text-sm font-[Rubik-Regular] text-[#008C1F]">verification code successfully sent to your email.</div>}
                <div className="flex justify-center w-full mt-4">
                    <Button type="submit" className="bg-[#172667] text-white border-none w-[168px] h-[48px] py-0.75 px-1.25 font-[Rubik-Regular]">Get verification code</Button>
                </div>
            </form>
        </Background>
  )
}

export default PasswordReset;
