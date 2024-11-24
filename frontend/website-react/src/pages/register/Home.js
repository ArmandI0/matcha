import { useState } from "react";
import RegisterForm from "../../features/register/RegisterForm";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
function Home() {
    
    // Veriier si connecter
    const [state, changeState] = useState({login : false})
    
    return (
        <div>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <RegisterForm></RegisterForm>
        </div>
    );
}

export default Home;