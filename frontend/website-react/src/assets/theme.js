import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    // Police par défaut (Roboto)
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    
    // Uniquement les titres en Poppins
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 900,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '1.1rem',
    }
  },
  // Espacement cohérent
  spacing: 8, // Base spacing unit de 8px
  
  // Vous pouvez aussi ajouter vos couleurs personnalisées
  palette: {
    primary: {
      main: '#fe3c72', // Rose pour Matcha
      light: '#FF69B4',
      dark: '#C71585',
    },
    secondary: {
      main: '#4A90E2',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
});