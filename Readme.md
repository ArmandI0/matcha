## REACT PROJECT

### Architecture

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.js
│   │   ├── Button.css
│   │   └── Button.test.js
│   ├── Modal/
│   │   ├── Modal.js
│   │   ├── Modal.css
│   │   └── Modal.test.js
│   ├── InputField/
│   │   ├── InputField.js
│   │   ├── InputField.css
│   │   └── InputField.test.js
│   ├── Header/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   └── Header.test.js
├── features/
│   ├── Auth/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── authSlice.js
│   │   └── Auth.css
│   ├── Dashboard/
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   └── dashboardSlice.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   ├── RegisterPage.js
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── userService.js
├── utils/
│   ├── formatDate.js
│   ├── validateForm.js
├── App.js
├── index.js
└── index.css

```