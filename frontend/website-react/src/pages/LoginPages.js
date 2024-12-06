import RegisterForm from "../features/login/RegisterForm";
import LoginForm from "../features/login/LoginForm";
import "./LoginPages.css";

export function Login() {
    return (
        <div className="loginPages">
            <h1 className="title">MATCHA</h1>
            <LoginForm></LoginForm>
        </div>
    );

}

export function Register() {
    return (
        <div>
            <h1>SGKJKJGKLG</h1>
            <RegisterForm></RegisterForm>    
        </div>
    );
}
