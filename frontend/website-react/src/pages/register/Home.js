import { useState } from "react";
import RegisterForm from "../../features/login/LoginForm";
import LoginForm from "../../features/login/LoginForm";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
function Home() {
    
    // Veriier si connecter
    const [state, changeState] = useState({login : false})
    if (state.login === false) {
        return (
            <div>
                <PrimarySearchAppBar></PrimarySearchAppBar>
                <RegisterForm></RegisterForm>
            </div>
        );
    }
}

export default Home;