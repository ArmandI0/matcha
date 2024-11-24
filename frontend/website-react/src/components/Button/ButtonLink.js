import Link from '@mui/material/Link';

export default function ButtonLink({name, onClick}) {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={onClick}
    >
    {name}
    </Link>
  );
}