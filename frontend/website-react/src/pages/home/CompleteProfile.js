import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AddressForm from "../../components/profile/AdressForm";
import ValidateButton from "../../components/Button/ValidateButton";
import InfosForm from "../../components/profile/InfosForm";
import './Home.css'

function CompleteProfile() {

	const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Soumission des deux formulaires");
    };

    return (
        <div className="basicPage">
			<PrimarySearchAppBar></PrimarySearchAppBar>
			<form onSubmit={handleSubmit}>
				<div className="page-container">
					<InfosForm></InfosForm>
					<AddressForm></AddressForm>
					<ValidateButton
					    name='Save preferences'
						type="submit"
					/>
				</div>
			</form>
			<Footer></Footer>
		</div>
	)
}

export default CompleteProfile;