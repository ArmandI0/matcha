import Button from '@mui/material/Button';

function ValidateButton(props){
    

  return(
      <Button variant="contained" color="success" sx={{ width: '25ch' }}>
          {props.name}
      </Button>
  );
}

export default ValidateButton;