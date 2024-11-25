import { useState } from "react";
import RegisterForm from "../../features/login/LoginForm";
import LoginForm from "../../features/login/LoginForm";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import './Home.css';

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
                <p>COUCOUC EMILE MON POTE</p>
            </div>
        ); 
    }
}

export default Home;