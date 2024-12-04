import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from "./pages/chat/Chat"
import Home from "./pages/register/Home";
import LoginForm from './features/login/LoginForm';
import Footer from './components/Footer/Footer';
import './App.css';
import PrimarySearchAppBar from './features/NavBar/NavBar';
import UseTest from './pages/test/test';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/test" element={<UseTest />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
