import { useState, useEffect } from "react";
import ValidateButton from "../../components/Button/ValidateButton";

export default function UseTest() {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
      console.log("Le compteur a changé:", count);
    }, [count]); // S'exécute quand count change
   
    const fetchAPI = async () => {
      try {
        const response = await fetch('/test');
        const res = await response.json();
        setCount(count + 1); // Incrémente le compteur à chaque appel
        console.log(res);
      } catch (error) {
        console.error('Erreur:', error);
      }
    }
   
    return (
      <div>
        <p>Nombre de clics: {count}</p>
        <ValidateButton
          name='test'
          onClick={fetchAPI}
        />
      </div>
    );
}