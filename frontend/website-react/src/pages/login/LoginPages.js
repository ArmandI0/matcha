import RegisterForm from "../../features/login/RegisterForm";
import LoginForm from "../../features/login/LoginForm";
import "../styles.css";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';

export function Login() {
    return (
      <div className="basicPage">
          <PrimarySearchAppBar />
          <LoginForm />
          <Footer />
      </div>
    );
}

export function Register() {
    return (
      <div className="basicPage">
          <PrimarySearchAppBar />
          <RegisterForm />
          <Footer />
      </div>
    );
}
