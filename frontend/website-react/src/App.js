import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from "./pages/chat/Chat"
import Home from "./pages/register/Home";
import LoginForm from './features/login/LoginForm';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import { ProtectedRoute } from './components/Hook/ProtectedRoutes';
import { Login, Register} from './pages/LoginPages';

function App() {
  return (
    <AuthProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/chat" element={
					<ProtectedRoute>
						<Chat />
					</ProtectedRoute>
					} />
			</Routes>
		</BrowserRouter>
	</AuthProvider>
  );
}	

export default App;
