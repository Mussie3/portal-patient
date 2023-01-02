import { useState, useContext, useReducer } from "react";
import Background from "../UI/Background";
import Logo from '../assets/Logo.svg';
import Button from "../UI/Button";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import Context from "../store/Context";
import { Link } from "react-router-dom";

const handleCrediential = (state, action) => {
    if (action.type === 'EMAIL') {
        if (action.val.includes("@") && state.password.trim().lenght > 6) {
            return {
                email: action.val,
                password: state.password,
                isValid: true
            } 
        } else {
            return {
                email: action.val,
                password: state.password,
                isValid: false 
            }
        }
        
    } else if (action.type === "PASSWORD") {
        if (state.email.includes("@") && action.val.trim().length > 6) {
            return {
                email: state.email,
                password: action.val,
                isValid: true
            }
        } else {
            return {
                email: state.email,
                password: action.val,
                isValid: false
            }
        }
        
    } else {
        return {
            email: '',
            password: '',
            isValid: false 
        }
    }
}


const Login = props => {
    const userContext = useContext(Context);


    const [credentialState, dispatchCredientialAction] = useReducer(handleCrediential, {
        email: '',
        password: '',
        isValid: false
    })

    const [hidden, setHidden] = useState(false);
    const handleReveal = () => {
        setHidden(true);
    }
    const handleEmail = e => {
        dispatchCredientialAction({type: "EMAIL", val: e.target.value})
    }

    const handlePassword = e => {
        dispatchCredientialAction({type: "PASSWORD", val: e.target.value})
    }

    const handleHide = () => {
        setHidden(false);
    }

    const handleSubmit = e => {
        e.preventDefault();        
        userContext.user({email: credentialState.email, password: credentialState.password});
    }
    return(
        <Background>
            <div className="flex justify-center w-full p-4 pb-2">
                <div><img src={Logo} alt="Clionic-logo" className="w-[317px] h-[131px]"/></div>
            </div>
            <div className="px-10 font-[Rubik-Bold] text-xl text-[#475467] uppercase">Login</div>
            <div className="px-10 font-[Rubik-Regular] text-sm text-[#475467]">Login to your account</div>
            <form onSubmit={handleSubmit} className="p-10 pt-2">
                <div className="pb-2"><label htmlFor="email" className="font-[Rubik-Medium] text-md text-[#172667] text-sm">Email</label></div>
                <div className="pb-2"><input type="email" id="email" className="w-full border-[1px] border-[rgba(23, 38, 103, 0.5)] h-10 py-2 px-3" placeholder="example@email.com" onChange={handleEmail}/></div>
                <div className="pb-2"><label htmlFor="password" className="font-[Rubik-Medium] text-md text-[#172667] text-sm">Password</label></div>
                <div className="relative pb-2"><input type={`${hidden  ? 'text' : 'password'}`} id="password" className="w-full h-10 border-[1px] border-[rgba(23, 38, 103, 0.5)] py-2 px-3" placeholder="**********" onChange={handlePassword}/></div>
                {!hidden ? <div className="absolute right-[48px] bottom-[29.5%] cursor-pointer"><BsEyeSlash onClick={handleReveal}/></div> : <div className="absolute right-[48px] bottom-[29.5%] cursor-pointer"><BsEye onClick={handleHide}/></div>}
                <div className="flex justify-end mt-1 mb-4 text-sm font-[Rubik-Regular] text-[#172667]">Forgot password?<strong className="ml-1"><Link to="/password-reset">Click here</Link></strong></div>
                <div className="flex justify-center w-full">
                    <Button type="submit" className={`${credentialState.isValid ? 'bg-[#172667] text-white border-none w-[168px] h-[48px] py-0.75 px-1.25 font-[Rubik-Regular]' : 'bg-[#808080] text-white border-none w-[168px] h-[48px] py-0.75 px-1.25 font-[Rubik-Regular]'}`} disabled={credentialState.isValid ? false : true}>Login</Button>
                </div>
            </form>
        </Background>
    );
}

export default Login;