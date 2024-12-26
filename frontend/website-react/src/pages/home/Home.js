import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import '../styles.css'
import ValidateButton from "../../components/Button/ValidateButton";

function Home() {
    
    async function fetchTest() {
        try {
            const response = await fetch('/user/user-profile-status', {
                method: 'GET',
            });
            if (response.ok) {
                const res = await response.json();
                console.log(res);
                console.log('getUser ok');
            } else {
                console.error('Erreur lors de l\'envoi du message');
                return false;
            }
          } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            return false;
        }
    };

    return (
        <div className="basicPage">
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <h1> C'est la super page HOME </h1> C'est la super page HOME
            <ValidateButton
            name='Le bouton de test'
            onClick={fetchTest}
            />
            <Footer></Footer>
        </div>
    );

}

export default Home;