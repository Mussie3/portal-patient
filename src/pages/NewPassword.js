import { useState } from "react";
import Background from "../UI/Background";
import Logo from '../assets/Logo.svg';
import Button from "../UI/Button";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { Link } from "react-router-dom";



const NewPassword = props => {

    const [hidden, setHidden] = useState(false);

    const handleReveal = () => {
        setHidden(true);
    }

    const handleHide = () => {
        setHidden(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return(
        <Background>
            <div className="flex justify-center w-full p-4 pb-2 mb-4">
                <div><img src={Logo} alt="Clionic-logo" className="w-[317px] h-[131px]"/></div>
            </div>
            <div className="px-10 font-[Rubik-Bold] text-xl text-[#475467] uppercase">New Password</div>
            <div className="px-10 font-[Rubik-Regular] text-sm text-[#475467] mb-4">Please enter your new password.</div>
            <form onSubmit={handleSubmit} className="p-10 pt-2">
                <div className="pb-2"><label htmlFor="password" className="font-[Rubik-Medium] text-md text-[#172667] text-sm">New password</label></div>
                <div className="relative pb-2"><input type={`${hidden  ? 'text' : 'password'}`} id="password" className="w-full h-10 border-[1px] border-[rgba(23, 38, 103, 0.5)] py-2 px-3" placeholder="**********"/></div>
                {!hidden ? <div className="absolute right-[48px] top-[56.5%] cursor-pointer"><BsEyeSlash onClick={handleReveal}/></div> : <div className="absolute right-[48px] top-[56.5%] cursor-pointer"><BsEye onClick={handleHide}/></div>}
                <div className="pb-2"><label htmlFor="confirmpassword" className="font-[Rubik-Medium] text-md text-[#172667] text-sm">Confirm password</label></div>
                <div className="relative pb-2"><input type='password' id="confirmpassword" className="w-full h-10 border-[1px] border-[rgba(23, 38, 103, 0.5)] py-2 px-3" placeholder="**********"/></div>
                <div className="flex justify-center w-full mt-4">
                    <Button type="submit" className="bg-[#172667] text-white border-none w-[168px] h-[48px] py-0.75 px-1.25 font-[Rubik-Regular]"><Link to="/">Change password</Link></Button>
                </div>
            </form>
        </Background>
    );
}

export default NewPassword;