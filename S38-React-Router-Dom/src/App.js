import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from './components/Recipes';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      <Route path="/WelcomePage" element={<WelcomePage></WelcomePage>}></Route>
      <Route path="/Recipes" element={<Recipes></Recipes>}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
