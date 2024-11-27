// import InputField from "../../components/InputField.js/InputField";
// import './style.css';
// import ValidateButton from "../../components/Button/ValidateButton";
// import ButtonLink from "../../components/Button/ButtonLink";
// import { useState } from "react";

// function LoginForm() {
//   const [form, setForm] = useState('register');

//   const changeForm = () => {
//     if (form === 'login')
//       setForm('register')
//     else
//       setForm('login')
//   };
  
//   if (form === 'register') {
//     console.log(form);
//     return (
//       <div className="Form">
//         <h1 className="title">Register</h1>
//         <InputField nameField="Username"></InputField>
//         <InputField nameField="Email"></InputField>
//         <InputField nameField="Password"></InputField>
//         <InputField nameField="Password2"></InputField>
//         <InputField nameField="Last name"></InputField>
//         <InputField nameField="First name"></InputField>
//         <ValidateButton name='register'></ValidateButton>
//         <ButtonLink name="login" onClick={changeForm}></ButtonLink>
//       </div>
//     );
//   }
//   if (form === 'login') {
//     console.log(form);
//     return (
//       <div className="Form">
//         <h1 className="title">Login</h1>
//         <InputField nameField="Username"></InputField>
//         <InputField nameField="Password"></InputField>
//         <ValidateButton name='login'></ValidateButton>
//         <ButtonLink name="register" onClick={changeForm}></ButtonLink>
//       </div>
//       );
//   }
// }

// export default LoginForm;