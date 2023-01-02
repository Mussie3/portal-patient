import React, { useState } from 'react';
import Background from '../UI/Background';
import Logo from '../assets/Logo.svg';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Code from '../components/Code';



const CodeVerification = props => {

   const handleCode = e => {
    
   } 

    return (
        <Background>
            <div className="flex justify-center w-full p-4 pb-2 mb-6">
                <div><img src={Logo} alt="Clionic-logo" className="w-[317px] h-[131px]"/></div>
            </div>
            <div className="px-10 font-[Rubik-Bold] text-xl text-[#475467] uppercase">Verification</div>
            <div className="px-10 font-[Rubik-Regular] text-sm text-[#475467] mb-4">Enter the verification code sent to your email.</div>
            <Code
            title="Enter code"
            link="/new-password"
            buttonContent="Verify"
            code={handleCode}
            />
        </Background>
    );
};

export default CodeVerification;