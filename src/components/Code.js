import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

let VerificationCode = [];
const Code = props => {

    const navigate = useNavigate()

    const [valid, setValid] = useState(false);

    const handleFocus = e => {
        console.log(+e.target.id);
        VerificationCode.splice(+e.target.id, 1, e.target.value);
        console.log(VerificationCode);
        for (let index = 0; index < 6; index++) {
            if(+e.target.id === index && e.target.value !== "" && +e.target.id < 5) {
                document.getElementById(index + 1).focus();
                break;
            }}
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        let verificationString = '';
        console.log("Hello");
        for (let index = 0; index < VerificationCode.length; index++) {
            verificationString += VerificationCode[index]
        }
        props.code(verificationString);
        navigate(props.link);
        
    }

    return (
        <form onSubmit={handleSubmit} className="p-10 pt-2">
            {props.title && <div className=""><label htmlFor={`${props.id}`} className="font-[Rubik-Medium] text-[#172667] text-md">{props.title}</label></div>}
            <div className="flex justify-center w-full pb-8">
                <div className="w-1/5 p-1"><input type="text" maxLength={1} id="0" className=" w-10 h-12 border-[1px] border-[rgba(71, 84, 103, 0.5)] text-2xl text-center" placeholder='_' autoFocus required onChange={handleFocus}/></div>
                <div className="w-1/5 p-1"><input type="text" maxLength={1} id="1" className=" w-10 h-12 border-[1px] border-[rgba(71, 84, 103, 0.5)] text-2xl text-center" placeholder='_' required onChange={handleFocus}/></div>
                <div className="w-1/5 p-1"><input type="text" maxLength={1} id="2" className=" w-10 h-12 border-[1px] border-[rgba(71, 84, 103, 0.5)] text-2xl text-center" placeholder='_' required onChange={handleFocus}/></div>
                <div className="w-1/5 p-1"><input type="text" maxLength={1} id="3" className=" w-10 h-12 border-[1px] border-[rgba(71, 84, 103, 0.5)] text-2xl text-center" placeholder='_' required onChange={handleFocus}/></div>
                <div className="w-1/5 p-1"><input type="text" maxLength={1} id="4" className=" w-10 h-12 border-[1px] border-[rgba(71, 84, 103, 0.5)] text-2xl text-center" placeholder='_' required onChange={handleFocus}/></div>
                <div className="w-1/5 p-1"><input type="text" maxLength={1} id="5" className=" w-10 h-12 border-[1px] border-[rgba(71, 84, 103, 0.5)] text-2xl text-center" placeholder='_' required onChange={handleFocus}/></div>
            </div>
            <div className="flex justify-center w-full">
                <Button type="submit" className="bg-[#172667] text-white border-none w-[168px] h-[48px] py-0.75 px-1.25 font-[Rubik-Regular]">{props.buttonContent}</Button>
            </div>
        </form> 
    );
}

export default Code;