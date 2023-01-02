import { useReducer } from "react";
import Context from "./Context";


const defaultValue = {
    isLoggedIn: null,
    message: ''
}
const userReducerFun = (state, action) => {

    console.log(action.user);
    if(action.type === "LOGIN") {
        if(action.user.email.toUpperCase() === 'keplerlab2022@gmail.com' && action.user.password === "Zpvmffjfoqrkwmdk2022") {
            console.log("Awesome");
            return {
                isLoggedIn: true,
                message: ''
            }
        } else if (action.user.email === 'keplerlab2022@gmail.com' && action.user.password !== "Zpvmffjfoqrkwmdk2022") {
            alert("You have entered a wrong password!");
            return {
                isLoggedIn: false,
                message: 'You have entered a wrong password!'
            }
        } else if (action.user.email.toUpperCase() !== 'keplerlab2022@gmail.com' && action.user.password === "Zpvmffjfoqrkwmdk2022") {
            alert("You have entered a wrong Email!");
            return {
                isLoggedIn: false,
                message: 'You have entered a wrong Email!'
            }
        } else {
            alert("You have entered wrong Credientials!");
            return {
                isLoggedIn: false,
                message: 'You have entered wrong Credientials!'
            } 
        }
    }
    if(action.type === "LOGOUT") {
        return {
            isLoggedIn: false,
            message: ''
        }
    }
     
    return defaultValue
}

const ContextProvider = (props) => {
    const [userState, dispatchUserAction] = useReducer(userReducerFun, defaultValue);


    const handleCredientials = user => {
        dispatchUserAction({type: "LOGIN", user: user})
    }

    const handleLogout = () => {
        dispatchUserAction({type: "LOGOUT"})
    }

    const updatedValue = {
        isLoggedIn: userState.isLoggedIn,
        message: userState.message,
        user: handleCredientials,
        logout: handleLogout
    }

    return(
        <Context.Provider value={updatedValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;