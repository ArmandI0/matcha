import Box from '@mui/material/Box';
import { StyledTextField } from './FormField';

function InputField(props) {
    return (
        <Box
          sx={{ '& > :not(style)': {width: '20ch', marginBottom: '5px' , marginTop: '5px'} }}
          noValidate
          autoComplete="off"
        >
          <StyledTextField
            id="outlined-basic"
            label={props.nameField}
            type={props.type}
            variant="outlined"
            value={props.value}
            onChange={props.onChange}
            error={Boolean(props.error)}
            helperText={props.error}
          />
        </Box>
    );
}

export default InputField;