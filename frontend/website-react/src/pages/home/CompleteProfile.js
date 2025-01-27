import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AddressForm from "../../components/profile/AdressForm";
import ValidateButton from "../../components/Button/ValidateButton";
import InfosForm from "../../components/profile/InfosForm";
import './Home.css'

function CompleteProfile() {
    return (
        <div className="basicPage">
			<PrimarySearchAppBar></PrimarySearchAppBar>
			<div className="page-container">
				<h1> FAUT RENTRER LES INFOS </h1>
				<InfosForm></InfosForm>
				<InfosForm></InfosForm>
				<AddressForm></AddressForm>
			</div>
			<Footer></Footer>
		</div>
	)
}

export default CompleteProfile;