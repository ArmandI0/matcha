import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from "./pages/chat/Chat"
import Home from "./pages/register/Home";
import LoginForm from './features/login/LoginForm';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import PrimarySearchAppBar from './features/NavBar/NavBar';
import UseTest from './pages/test/test';
import { ProtectedRoute } from './components/Hook/ProtectedRoutes';

function App() {
  return (
    <AuthProvider>
		<div className="app">
			<BrowserRouter>
				<PrimarySearchAppBar></PrimarySearchAppBar>
				<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chat" element={
						<ProtectedRoute>
							<Chat />
						</ProtectedRoute>
						} />
					<Route path="/test" element={<UseTest />} />
				</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	</AuthProvider>
  );
}

export default App;
