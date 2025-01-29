import styled from '@mui/material/styles/styled';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
	  backgroundColor: theme.palette.background.paper,
	  '& fieldset': {
		borderColor: theme.palette.primary.light,
		transition: 'border-color 0.2s ease-in-out',
	  },
	  '&:hover fieldset': {
		borderColor: theme.palette.primary.dark,  // Hover color
	  },
	  '&.Mui-focused fieldset': {
		borderColor: theme.palette.primary.main,    // Focus color
	  }
	},
	'& .MuiInputLabel-root': {
	  color: theme.palette.text.secondary
	}
  }));

  export const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: theme.palette.primary.light,
		transition: 'border-color 0.2s ease-in-out',
	  },
	  '&:hover fieldset': {
		borderColor: theme.palette.primary.dark,
	  },
	  backgroundColor: theme.palette.background.paper,
	},
	'& .MuiInputLabel-root': {
	  color: theme.palette.text.secondary
	}
  }));

  export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: theme.palette.primary.light,
	  },
	  '&:hover fieldset': {
		borderColor: theme.palette.primary.dark,
	  }
	},
	backgroundColor: theme.palette.background.paper,
	'& .MuiInputBase-input::placeholder': {
	  color: theme.palette.secondary.primary
	}
  }));
  