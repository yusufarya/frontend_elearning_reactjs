import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import RootLayout from './lib/layout/RootLayout'
import Dashboard from './app/pages/Dashboard'
import Login from "./app/pages/Login";
import Register from './app/pages/Register';
import { Provider } from 'react-redux';
import store from './app/redux/store';

function App() {
    const loggedIn = false;
    return (
        <Router>
            <RootLayout>
                <Provider store={store}>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path="/" element={!loggedIn ? <Navigate to="/login" /> : <Dashboard />} />
                    </Routes>
                </Provider>
            </RootLayout>
        </Router>
    )
}

export default App
