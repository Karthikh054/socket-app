import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './auth/Register';
import Login from './auth/Login';
import Chat from './chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/app" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
