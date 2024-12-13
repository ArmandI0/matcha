import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Chat from "./pages/chat/Chat"
import Home from "./pages/home/Home";
import './App.css'
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/Hook/ProtectedRoutes';
import { LoginRoute } from './components/Hook/LoginRoutes'
import { Login, Register} from './pages/login/LoginPages';

function LoginRoutes() {
	return (
		<LoginRoute>
			<Outlet/>
		</LoginRoute>
	);
}

function ProtectedRoutes() {
	return (
	  <ProtectedRoute>
		<Outlet/> 
	  </ProtectedRoute>
	);
  }

function App() {
  return (
    <AuthProvider>
		<BrowserRouter>
			<Routes>
				{/* Route non authentifie */}
				<Route element={<LoginRoutes/>}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
				{/* Route authentifie */}
				<Route element={<ProtectedRoutes/>}>
					<Route path="/home" element={<Home />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</AuthProvider>
  );
}	

export default App;
