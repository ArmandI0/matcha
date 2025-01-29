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
      main: '#FF6B6B',    // Corail électrique
      light: '#FF8585',
      dark: '#FF5252',
    },
    secondary: {
      main: '#1A1818',    // Noir profond
      light: '#232020',
      dark: '#121010',
    },
    tertiary: {
      main: '#FF3366',    // Rose néon
      light: '#FF5C85',
      dark: '#E61E4D',
    },
    text: {
      primary: '#1A1818',    // Noir profond
      secondary: '#666666',   // Gris moyen
    },
    background: {
      default: '#FFFFFF',     // Cards en blanc
      paper: '#F8F8F8',      // Champs légèrement grisé
      color: '#F4F4F4',      // Fond très légèrement grisé
    },
  },
});


// PALETTE DARK 
// palette: {
//   primary: {
//     main: '#FF6B6B',    // Corail électrique
//     light: '#FF8585',
//     dark: '#FF5252',
//   },
//   secondary: {
//     main: '#FFFFFF',    // Blanc pur
//     light: '#FFFFFF',
//     dark: '#F0F0F0',    // Très légèrement grisé pour le dark
//   },
//   tertiary: {
//     main: '#FF3366',    // Rose néon
//     light: '#FF5C85',
//     dark: '#E61E4D',
//   },
//   text: {
//     primary: '#FFFFFF',
//     secondary: '#B3B3B3',
//   },
//   background: {
//     default: '#1A1818',    // Cards
//     paper: '#232020',      // Champs
//     color: '#121010',      // Fond
//   },
// }