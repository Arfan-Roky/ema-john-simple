import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }/>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment/>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}>Sign Up</Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
