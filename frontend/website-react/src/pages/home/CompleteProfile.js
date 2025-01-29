import PrimarySearchAppBar from "../../features/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import AddressForm from "../../features/Form/AdressForm";
import ValidateButton from "../../components/Button/ValidateButton";
import InfosForm from "../../features/Form/InfosForm";
import {Box, Typography} from '@mui/material';
import { StyledBackground, PageContainer } from "../../components/Surface/Cards";

function CompleteProfile() {

	const handleChange = (name, value) => {
		console.log(name, value);
	};

	const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Soumission des deux formulaires");
		console.log(event);
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
					<InfosForm onChange={handleChange} ></InfosForm>
					<AddressForm onChange={handleChange}></AddressForm>
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