import ValidateButton from "../../components/Button/ValidateButton";
import ButtonLink from "../../components/Button/ButtonLink";
import InputField from "../../components/InputField.js/InputField";
import './style.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
  	const [formData, setFormData] = useState({
  	  	username: '',
  	  	password: '',
  	});
  	const [errors, setErrors] = useState({
		  username: '',
		  password: '',
  	});

	const checkForm = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });
        console.log('response ======================');
        console.log(response);
        console.log('response ======================');
        if (response.ok) {
            const res = await response.json();
            if (res.login === true) {
              navigate('/home');
            }              
            else {
              setErrors({...errors, [res.field]: res.message});
              console.log('ENTREE VALID');
            }
            console.log(res);
        } else {
            console.error('Erreur lors de l\'envoi du message');
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
    }
 };

   return (
      <div className="containerForm">
        <h1 className="titleForm">Login</h1>
        <form className="form" onSubmit={checkForm}>
          <InputField
            nameField="Username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            error={errors.username}
          />
          <InputField
            nameField="Password"
            value={formData.password}
            type="password"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            error={errors.password}
          />
          <ValidateButton
            name='login'
            type="submit"
          />
        </form>
        {/* rajouter une route  pour button link*/}
        <ButtonLink name="register" path="/register"></ButtonLink> 
      </div>
    );
}