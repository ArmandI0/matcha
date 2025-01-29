import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AddressForm from "../../components/profile/AdressForm";
import ValidateButton from "../../components/Button/ValidateButton";
import InfosForm from "../../components/profile/InfosForm";
import {Box, Typography} from '@mui/material';
import { StyledBackground, PageContainer } from "../../components/Surface/Cards";

import './Home.css'

function CompleteProfile() {

	const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Soumission des deux formulaires");
    };

    return (
        <StyledBackground>
			<PrimarySearchAppBar></PrimarySearchAppBar>
			<form onSubmit={handleSubmit}>
				<PageContainer>
					<Box>
						<Typography variant='h5' color='secondary.main' gutterBottom>
							Welcome! One Last Step...
						</Typography>
						<Typography variant='body1' color='text.secondary' marginBottom={2}>
							To unlock all features and start meeting amazing people, please complete your profile first. It only takes a few minutes!
						</Typography>
					</Box>
					<InfosForm></InfosForm>
					<AddressForm></AddressForm>
					<ValidateButton
					    name='Save preferences'
						type="submit"
					/>
				</PageContainer>
			</form>
			<Footer></Footer>
		</StyledBackground>
	)
}

export default CompleteProfile;