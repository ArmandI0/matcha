import Button from '@mui/material/Button';

function ValidateButton(props){
    

  return(
      <Button variant="contained" type={props.type} onClick={props.onClick} color="success" sx={{marginBottom: '5px' , marginTop: '20px', width: '25ch', backgroundColor: '#fe3c72'}}>
          {props.name}
      </Button>
  );
}

export default ValidateButton;