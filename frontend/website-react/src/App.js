import { useState } from "react";
import Button from '@mui/material/Button';
import InputField from "./components/InputField.js/InputField";

import Home from "./pages/register/Home";

function App() {
  // state
  const [compteur, setCompteur] = useState(1);
  
  //affichage
  return(
    <div>
      <InputField>blabla</InputField>
      <h1>{compteur}</h1>
      <Button variant="contained" color="success">Increment</Button>
      <Home>home</Home>
    </div>
  );
}

export default App;
