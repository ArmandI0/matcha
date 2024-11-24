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
      <Home>home</Home>
    </div>
  );
}

export default App;
