import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Cart from "./components/cart/Cart"
import DashBoard from "./components/dashboard/DashBoard"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

function App() {
  return (
    <> 

      <NavBar/>
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
        <Route path='/card' element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
