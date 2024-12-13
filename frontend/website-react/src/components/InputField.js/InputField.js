import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputField(props) {
    return (
        <Box
          sx={{ '& > :not(style)': {width: '20ch', marginBottom: '5px' , marginTop: '5px'} }}
          noValidate
          autoComplete="off"
        >
          <TextField
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