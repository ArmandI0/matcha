import { useState } from "react";
import LoginForm from "../../features/login/LoginForm";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import RegisterForm from "../../features/login/RegisterForm";
import './Home.css';

function Home() {
    
    // Veriier si connecter
    const [state, changeState] = useState({login : false})
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
                <p>COUCOUC EMILE MON POTE</p>
            </div>
        ); 
    }
}

export default Home;