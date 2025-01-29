import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import ChipsArray from '../InputField.js/ChipsArray';
import './Profile.css'

import { StyledAutocomplete, StyledTextField, StyledOutlinedInput } from "../../components/InputField.js/FormField";
import { ProfileBox } from "../../components/Surface/Cards";


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
		<ProfileBox>
				<Typography variant="h5" sx={{ mb: 1, display: 'flex', justifyContent: 'start', color: 'secondary.main'
				}}>
				Preferences
				</Typography>
				<Grid container spacing={3}>
				<FormGrid size={{ xs: 12, md: 6 }}>
					<FormLabel htmlFor="Gender" required>
						Gender
					</FormLabel>
					<StyledAutocomplete
						disablePortal
						id="Gender"
						options={genderOptions}
						size="small"
						renderInput={(params) => (
						<StyledTextField 
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
					<StyledAutocomplete
						disablePortal
						id="Gender"
						options={sexualPreferences}
						size="small"
						renderInput={(params) => (
						<StyledTextField 
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
					<StyledTextField
						id="address1"
						name="address1"
						type="address1"
						backgroundColor='background.default'
						placeholder="Share your story, interests and what you're looking for..."						required
						multiline
						rows={4}
					/>
				</FormGrid>
				<FormGrid size={{ xs: 12 }}>
					<FormLabel htmlFor="address2">
						Interests
					</FormLabel>
					<ChipsArray/>
				</FormGrid>
			</Grid>
		</ProfileBox>
	);
}