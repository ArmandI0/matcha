import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputField(props) {
    return (
        <Box
          component="form"
          sx={{ '& > :not(style)': {width: '25ch', marginBottom: '5px' , marginTop: '5px'} }}
          noValidate
          autoComplete="off"
        >
        <TextField id="outlined-basic" label={props.nameField} variant="outlined" />
        </Box>
    );
}

export default InputField;