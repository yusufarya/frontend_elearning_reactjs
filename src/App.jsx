import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from './lib/layout/RootLayout'
import Dashboard from './app/pages/Dashboard'
import Login from "./app/pages/Login";
import Register from './app/pages/Register'; 
import Profile from './app/pages/Profile';
import getToken from './app/authorization/getToken';

function App() { 

    const loginToken = getToken()
    
    return (
        <>
        <Router>
            <RootLayout>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path="/" element={loginToken != false ? <Navigate to="/dashboard" /> : <Navigate to="/login" /> } />
                </Routes>
            </RootLayout>
        </Router>
        </>
    )
}

export default App
