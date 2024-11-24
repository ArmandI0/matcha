import InputField from "../../components/InputField.js/InputField";
import './RegisterFrom.css';
import ValidateButton from "../../components/Button/ValidateButton";

function RegisterForm() {
    return (
    <div class="registerForm">
      <h1 class="title">Register</h1>
      <InputField nameField="Username"></InputField>
      <InputField nameField="Email"></InputField>
      <InputField nameField="Password"></InputField>
      <InputField nameField="Password2"></InputField>
      <InputField nameField="Last name"></InputField>
      <InputField nameField="First name"></InputField>
      <ValidateButton name='register'></ValidateButton>
    </div>
    );
}

export default RegisterForm;