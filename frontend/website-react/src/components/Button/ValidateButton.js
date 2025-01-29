import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(0.5),
  marginTop: theme.spacing(2.5),
  width: '25ch',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}));

function ValidateButton(props) {
  return (
    <StyledButton 
      variant="contained"
      type={props.type}
      onClick={props.onClick}
    >
      {props.name}
    </StyledButton>
  );
}

export default ValidateButton;