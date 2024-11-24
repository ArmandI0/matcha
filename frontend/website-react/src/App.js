import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from "./pages/chat/Chat"
import Home from "./pages/register/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
