import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Chat from "./pages/chat/Chat";
import Home from "./pages/home/Home";
import CompleteProfile from "./pages/home/CompleteProfile";
import './App.css'
import { AuthenticatedRoutes, UnauthenticatedRoutes, IncompleteProfileRoutes} from './components/Hook/ProtectedRoutes';
import { Login, Register} from './pages/login/LoginPages';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/theme';

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
			<ThemeProvider theme={theme}>
				<Routes>
					{/* Route non authentifie */}
					<Route element={<UnauthRoutes/>}>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Route>
					{/* Route authentifie */}
					<Route element={<AuthRoutes/>}>
						{/* <Route element={<ProfileCompletion/>}> */}
							<Route path="/home" element={<Home />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/" element={<Home />} />
						{/* </Route> */}
						<Route path="/complete_profile" element={<CompleteProfile />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
  );
}	

export default App;
