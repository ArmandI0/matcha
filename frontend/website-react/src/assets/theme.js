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
      main: '#FF9F1C',      // Orange mandarine vif (au lieu de E67E22)
      light: '#FFB649',     // (au lieu de F39C12)
      dark: '#F78200',      // (au lieu de D35400)
    },
    secondary: {
      main: '#A12145',    // Bordeaux profond
      light: '#B94B69',
      dark: '#8A1534',
    },
    tertiary: {
      main: '#FF4D4D',    // Orange-rouge vif
      light: '#FF7070',
      dark: '#E63333',
    },
    text: {
      primary: '#011627',    // Bleu très foncé (au lieu de 2C3E50)
      secondary: '#607D8B',  // Gris bleuté (au lieu de 7F8C8D)
    },
    background: {
      default: '#f9f7f3',    // (au lieu de F5F6FA)
      paper: '#FFFFFF',      // Inchangé
      color: '#FFE5C4',
    },
  },
});