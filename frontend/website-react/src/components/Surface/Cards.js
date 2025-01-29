import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBackground = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.color,
  width: '100vw',
  minHeight: '100vh',
  justifyContent: 'space-between'
}));

export const ProfileBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 'fit-content',
    height: 'auto',
    width: '100%',
    alignContent: 'center',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    background: theme.palette.background.default,
    padding: theme.spacing(4),
    boxSizing: 'border-box',
  }));

export const StyledCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 'fit-content',
  height: 'auto',
  minWidth: 'fit-content',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6),
  alignContent: 'center',
  alignItems: 'center',
}));

export const PageContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    gap: theme.spacing(4), // 2rem -> 32px with MUI spacing
    padding: theme.spacing(4),
    overflowY: 'auto',
    backgroundColor: 'transparent',
  }));