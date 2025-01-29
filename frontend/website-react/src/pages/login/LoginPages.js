import RegisterForm from "../../features/login/RegisterForm";
import LoginForm from "../../features/login/LoginForm";
import "../styles.css";
import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import { StyledBackground, PageContainer } from "../../components/Surface/Cards";

export function Login() {
    return (
      <StyledBackground>
          <PrimarySearchAppBar />
          <PageContainer>
            <LoginForm />
          </PageContainer>
          <Footer />
      </StyledBackground>
    );
}

export function Register() {
    return (
      <StyledBackground>
          <PrimarySearchAppBar />
          <PageContainer>
            <RegisterForm />
          </PageContainer>
          <Footer />
      </StyledBackground>
    );
}
