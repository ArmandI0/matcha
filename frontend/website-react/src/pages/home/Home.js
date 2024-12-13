import { useState } from "react";
import LoginForm from "../../features/login/LoginForm";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import RegisterForm from "../../features/login/RegisterForm";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import '../styles.css'

function Home() {
    

    return (
        <div className="basicPage">
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <h1> C'est la super page HOME </h1> C'est la super page HOME 
            <Footer></Footer>
        </div>
    );

}

export default Home;