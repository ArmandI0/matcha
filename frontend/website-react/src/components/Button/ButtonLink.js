import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export default function ButtonLink({name, path}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  
  return (
    
    <Link
      component="button"
      variant="body2"
      onClick={handleClick}
    >
    {name}
    </Link>
  );
}