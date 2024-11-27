import ValidateButton from "../../components/Button/ValidateButton";
import ButtonLink from "../../components/Button/ButtonLink";
import InputField from "../../components/InputField.js/InputField";
import './style.css';
import { useState } from "react";

export default function RegisterForm() {

    const [fomIsValid, setValidation] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        lastName: '',
        firstName: ''
      });

    const checkForm = (e) => {
        console.log('COUCOU');
    };

    return (
        <div className="Form">
          <h1 className="title">Register</h1>
          <form onSubmit={checkForm}>
            <InputField
                nameField="Username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
            <InputField
              nameField="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <InputField
              nameField="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <InputField 
              nameField="Password2"
              value={formData.password2}
              onChange={(e) => setFormData({...formData, password2: e.target.value})}
            />
            <InputField
              nameField="Last name"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            <InputField
              nameField="First name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
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