import ValidateButton from "../../components/Button/ValidateButton";
import ButtonLink from "../../components/Button/ButtonLink";
import InputField from "../../components/InputField.js/InputField";
import './style.css';
import { useState } from "react";
import checkData from "./validationFunction";

export default function RegisterForm() {

  const [fomIsValid, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    lastName: '',
    firstName: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    lastName: '',
    firstName: ''
  });

  const checkForm = async (e) => {
    e.preventDefault();
    const validator = {
        username: checkData.validateUsername,
        email: checkData.validateEmail,
        password: checkData.validatePassword,
        lastName: checkData.validateName,
        firstName: checkData.validateName,
    };
    let error = false;
    const newErrors = {};
    
    const validateData = async () => {
        for (const field in validator) {
            const validationFct = validator[field];
            const value = formData[field];
            newErrors[field] = await validationFct(value);
            if (newErrors[field] !== '') error = true;
        }
    };
 
    
    await validateData();
     setErrors(newErrors);
    
    if (error === false) {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const sentMessage = await response.json();
                console.log("test = ", sentMessage);
            } else {
                console.error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
        }
    }
 
    console.log('ERROR ==');
    console.log(errors);
    console.log(formData);
    console.log(error);
 };

   return (
      <div className="Form">
        <h1 className="title">Register</h1>
        <form onSubmit={checkForm}>
          <InputField
            nameField="Username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            error={errors.username}
          />
          <InputField
            nameField="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={errors.email}
          />
          <InputField
            nameField="Password"
            value={formData.password}
            type="password"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            error={errors.password}
          />
          <InputField
            nameField="Last name"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            error={errors.lastName}
          />
          <InputField
            nameField="First name"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            error={errors.firstName}
          />
          <ValidateButton
            name='register'
            type="submit"
          />
        </form>
        {/* rajouter une route  pour button link*/}
        <ButtonLink name="login"></ButtonLink> 
      </div>
    );
}