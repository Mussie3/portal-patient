import React from "react";


const Modal = props => {
    return (
        <div className="w-full absolute z-40 left-0 right-0 top-0 bottom-0 bg-blur-lg" onClick={props.onClick}>
            <div></div>
            <div className="bg-white w-[30%] left-[35%] absolute top-[30%] shadow-lg">
                {props.children}
            </div>
        </div>
    );
}

export default Modal;