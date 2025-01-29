import RegisterForm from "../../features/Login/RegisterForm";
import LoginForm from "../../features/Login/LoginForm";
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
