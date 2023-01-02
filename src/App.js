import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import CodeVerification from './pages/CodeVerification';
import NewPassword from './pages/NewPassword';
import { useContext, useEffect, useState } from "react";
import Context from "./store/Context";
import IndivisualPatient from "./pages/IndivisualPatient";
function App() {

  const userContext = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patient, setPatient] = useState({});

  const handlePatient = p => {
    if(p) {
      setPatient(p);
    }
  }

  useEffect(()=>{
    setIsLoggedIn(userContext.isLoggedIn);
  },[userContext.isLoggedIn])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home user={handlePatient}/> : <Login/>}/>
        <Route path="/password-reset" element={isLoggedIn ? <Home user={handlePatient}/> :<PasswordReset/>}/>
        <Route path="/code" element={isLoggedIn ? <Home user={handlePatient}/> :<CodeVerification/>}/>
        <Route path="/new-password" element={isLoggedIn ? <Home user={handlePatient}/> : <NewPassword/>}/>
        <Route path="/patient" element={isLoggedIn ? <IndivisualPatient patient={patient}/> : <Login/>}/>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <IndivisualPatient/>
    // </div>
    
  );
}

export default App;
