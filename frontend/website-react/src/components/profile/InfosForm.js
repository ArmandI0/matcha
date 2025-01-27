import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ChipsArray from './ChipsArray';
import './Profile.css'

const genderOptions = [
	{ label: 'Male' },
	{ label: 'Female' },
  ];

const sexualPreferences = [
	{ label: 'Hetero-sexual'},
	{ label: 'Homosexual'},
	{ label: 'Bisexual'}
];

const FormGrid = styled(Grid)(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

export default function InfosForm() {
	return (
		<div className="profileBox">
			<Grid container spacing={3}>
				<FormGrid size={{ xs: 12, md: 6 }}>
					<FormLabel htmlFor="Gender" required>
						Gender
					</FormLabel>
					<Autocomplete
						disablePortal
						id="Gender"
						options={genderOptions}
						size="small"
						renderInput={(params) => (
						<TextField 
							{...params} 
							placeholder="Select gender"
							required
							size="small"
						/>
						)}
					/>
				</FormGrid>
				<FormGrid size={{ xs: 12, md: 6 }}>
					<FormLabel htmlFor="last-name" required>
						Sexual preference
					</FormLabel>
					<Autocomplete
						disablePortal
						id="Gender"
						options={sexualPreferences}
						size="small"
						renderInput={(params) => (
						<TextField 
							{...params} 
							placeholder="Select sexual preference"
							required
							size="small"
						/>
						)}
					/>
				</FormGrid>
				<FormGrid size={{ xs: 12 }}>
					<FormLabel htmlFor="address1" required>
						Biography
					</FormLabel>
					<TextField
						id="address1"
						name="address1"
						type="address1"
						placeholder="Share your story, interests and what you're looking for..."						required
						multiline
						rows={4}
					/>
				</FormGrid>
				<FormGrid size={{ xs: 12 }}>
					<FormLabel htmlFor="address2">
						Address line 2
					</FormLabel>
					<ChipsArray/>
				</FormGrid>
				<FormGrid size={{ xs: 6 }}>
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
				<FormGrid size={{ xs: 6 }}>
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