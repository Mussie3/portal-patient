import React from "react";

const Context = React.createContext({
    isLoggedIn: null,
    logout: ()=>{},
    user: (user) => {},
});

export default Context;