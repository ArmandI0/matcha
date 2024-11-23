import { useState } from "react";

function App() {
  // state
  const [compteur, setCompteur] = useState(1);
  // comportement
  const kaka = () => {
    alert("blabla");
  };
  //affichage
  return(
    <div>
      <h1>{compteur}</h1>
      <button onClick={kaka}>Increment</button>
    </div>
  );
}

export default App;
