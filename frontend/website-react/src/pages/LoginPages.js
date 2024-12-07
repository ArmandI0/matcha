import RegisterForm from "../features/login/RegisterForm";
import LoginForm from "../features/login/LoginForm";
import "./LoginPages.css";
import PrimarySearchAppBar from "../features/NavBar/NavBar";
import Footer from '../components/Footer/Footer';

export function Login() {
    return (
      <div className="loginPages">
        <div className="content">
          <PrimarySearchAppBar />
          <LoginForm />
          <Footer />
        </div>
      </div>
    );
}

export function Register() {
    return (
      <div className="loginPages">
        <div className="content">
          <PrimarySearchAppBar />
          <RegisterForm />
          <Footer />
        </div>
      </div>
    );
}
