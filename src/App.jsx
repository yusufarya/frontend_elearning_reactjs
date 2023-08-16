import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import RootLayout from './layout/RootLayout'
import Dashboard from './pages/Dashboard'
import './App.css' 

function App() {

    return (
        <Router> 
            <RootLayout>
                <Routes>
                    <Route path='/' element={<Dashboard />}/>
                </Routes>
            </RootLayout> 
        </Router>
    )
}

export default App
