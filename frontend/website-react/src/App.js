import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Chat from "./pages/chat/Chat";
import Home from "./pages/home/Home";
import CompleteProfile from "./pages/home/CompleteProfile";
import './App.css'
import { AuthenticatedRoutes, UnauthenticatedRoutes, IncompleteProfileRoutes} from './components/Hook/ProtectedRoutes';
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

function ProfileCompletion(){
	return (
		<IncompleteProfileRoutes>
			<Outlet></Outlet>
		</IncompleteProfileRoutes>
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
					<Route element={<ProfileCompletion/>}>
						<Route path="/home" element={<Home />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/" element={<Home />} />
					</Route>
					<Route path="/complete_profile" element={<CompleteProfile />} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}	

export default App;
