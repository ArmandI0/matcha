import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const FormGrid = styled(Grid)(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export default function AddressForm() {
	return (
	  <div className="profileBox">
		<Typography variant="h5" sx={{ mb: 1, display: 'flex', justifyContent: 'start', color: 'rgba(254, 60, 114, 0.9)'}}>
			Localisation
		</Typography>
		<Grid container spacing={3}>
		  <FormGrid size={{ xs: 12 , md: 12}}>
			<FormLabel htmlFor="address1" required>
			  Address line
			</FormLabel>
			<OutlinedInput
			  id="address1"
			  name="address1"
			  type="address1"
			  placeholder="Street name and number"
			  autoComplete="shipping address-line1"
			  required
			  size="small"
			/>
		  </FormGrid>
		  <FormGrid size={{ xs: 6, md:6}}>
			<FormLabel htmlFor="city" required>
			  City
			</FormLabel>
			<OutlinedInput
			  id="city"
			  name="city"
			  type="city"
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
			<OutlinedInput
			  id="state"
			  name="state"
			  type="state"
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
			<OutlinedInput
			  id="zip"
			  name="zip"
			  type="zip"
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
			<OutlinedInput
			  id="country"
			  name="country"
			  type="country"
			  placeholder="United States"
			  autoComplete="shipping country"
			  required
			  size="small"
			/>
		  </FormGrid>
		</Grid>
	  </div>
	);
  }