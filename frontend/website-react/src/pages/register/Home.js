import { useState } from "react";
import RegisterForm from "../../features/login/LoginForm";
import LoginForm from "../../features/login/LoginForm";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
function Home() {
    
    // Veriier si connecter
    const [state, changeState] = useState({login : true})
    if (state.login === false) {
        return (
            <div>
                <RegisterForm></RegisterForm>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <PrimarySearchAppBar></PrimarySearchAppBar>
            </div>
        ); 
    }
}

export default Home;