import './App.css' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import RootLayout from './layout/RootLayout'
import Dashboard from './pages/Dashboard'
import Login from "./pages/Login";

function App() {

    return (
        <Router> 
            <RootLayout>
                <Routes>
                    <Route path='/' element={<Dashboard />}/> 
                    <Route path='/login' element={<Login />}/>
                </Routes>
            </RootLayout>
        </Router>
    )
}

export default App
