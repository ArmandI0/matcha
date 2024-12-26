import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Chat from "./pages/chat/Chat"
import Home from "./pages/home/Home";
import './App.css'
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './components/Hook/ProtectedRoutes';
import { Login, Register} from './pages/login/LoginPages';

function UnauthRoutes() {
	return (
		<UnauthenticatedRoutes>
			<Outlet/>
		</UnauthenticatedRoutes>
	);
}

function AuthRoutes() {
	return (
	  <AuthenticatedRoutes>
		<Outlet/> 
	  </AuthenticatedRoutes>
	);
  }

function App() {
  return (
		<BrowserRouter>
			<Routes>
				{/* Route non authentifie */}
				<Route element={<UnauthRoutes/>}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
				{/* Route authentifie */}
				<Route element={<AuthRoutes/>}>
					<Route path="/home" element={<Home />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}	

export default App;
