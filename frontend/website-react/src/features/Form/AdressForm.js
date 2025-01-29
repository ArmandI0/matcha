import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ProfileBox } from "../../components/Surface/Cards";
import {StyledTextField} from "../../components/InputField.js/FormField";

const FormGrid = styled(Grid)(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export default function AddressForm({onChange}) {
	const handleChange = (event) => {
		onChange(event.target.name, event.target.value);
	};

	return (
	  <ProfileBox>
		<Typography variant="h5" sx={{ mb: 1, display: 'flex', justifyContent: 'start', color: 'secondary.main'}}>
			Location
		</Typography>
		<Grid container spacing={3}>
		  <FormGrid size={{ xs: 12 , md: 12}}>
			<FormLabel htmlFor="address1" required>
			  Address line
			</FormLabel>
			<StyledTextField
			  id="address1"
			  name="address1"
			  placeholder="Street name and number"
			  autoComplete="shipping address-line1"
			  onChange={handleChange}
			  required
			  size="small"
			/>
		  </FormGrid>
		  <FormGrid size={{ xs: 6, md:6}}>
			<FormLabel htmlFor="city" required>
			  City
			</FormLabel>
			<StyledTextField
			  id="city"
			  name="city"
			  placeholder="New York"
			  autoComplete="City"
			  required
			  size="small"
			/>
		  </FormGrid>
		  <FormGrid size={{ xs: 6, md:6}}>
			<FormLabel htmlFor="state" required>
			  State
			</FormLabel>
			<StyledTextField
			  id="state"
			  name="state"
			  placeholder="NY"
			  autoComplete="State"
			  required
			  size="small"
			/>
		  </FormGrid>
		  <FormGrid size={{ xs: 6 }}>
			<FormLabel htmlFor="zip" required>
			  Zip / Postal code
			</FormLabel>
			<StyledTextField
			  id="zip"
			  name="zip"
			  placeholder="12345"
			  autoComplete="shipping postal-code"
			  required
			  size="small"
			/>
		  </FormGrid>
		  <FormGrid size={{ xs: 6 }}>
			<FormLabel htmlFor="country" required>
			  Country
			</FormLabel>
			<StyledTextField
			  id="country"
			  name="country"
			  placeholder="United States"
			  autoComplete="shipping country"
			  required
			  size="small"
			/>
		  </FormGrid>
		</Grid>
	  </ProfileBox>
	);
  }