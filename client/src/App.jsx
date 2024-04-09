import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import Header from "./compoment/Header";
import Home from './Menu/Home';
import Formation from "./Menu/Formation";
import Profil from "./Menu/Profil";
import Explore from "./Menu/Explore";
import AuthUser from "./compoment/AuthUser";
import DetailPost from "./compoment/DetailPost";
import LoginUser from "./compoment/LoginUser";
import LogOut from "./compoment/Logout";
import ContributionForm from "./compoment/Contribution";
import Footer from "./compoment/Footer";
import ModePayement from "./compoment/ModePayement";

export const ProphilUser = createContext();
function App() {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [loginUser, setLoginuser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setMenu(!menu);
  };

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  const handleLogin = async (passUser) => {
    try {
      const response = await axios.post('https://utami-funding-1.onrender.com/users/login', passUser);
      const { token } = response.data;
      const user = response.data.user;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      setAuthToken(token);
      setIsLogin(true);
      setIsSignin(true)
      setUser(user);
      return navigate('/')

    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    setAuthToken(null);
    setIsLogin(false);
    setIsSignin(false)
    setUser(null);
    return navigate('/')
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const storedUser = localStorage.getItem('user');
    if (token && (storedUser !== 'undefined')) {
      setAuthToken(token);
      setIsLogin(true);
      setIsSignin(true)
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const login = Object.fromEntries(data);
    form.reset();
    handleLogin(login);
  };
  return (
    <>
      <ProphilUser.Provider value={user}>
        {
          (menu) ? <div className="justify-around w-full ">
            <Header>
              <button onClick={handleClick} className="text-black text-5xl"> x </button>
            </Header>
            <div className="grid pt-20 px-8 self-center gap-12">
              <Link to='/' onClick={handleClick} className="border-b border-black hover:text-[#3563FF] text-2xl font-black"> Home </Link >
              <Link to='/Explore' onClick={handleClick} className="border-b border-black hover:text-[#3563FF] text-2xl font-black" >Explore</Link >
              <Link to='/Formation' className="border-b hover:text-[#3563FF] border-black text-2xl font-black" onClick={handleClick}  >Formation</Link >
              <Link to='/Profile' onClick={handleClick} className="border-b border-black hover:text-[#3563FF] text-2xl font-black" >Profile</Link >
            </div>
          </div> : <>
            <Header>
              <button onClick={handleClick} className="text-black text-5xl"> + </button>
            </Header>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Explore' element={<Explore />} />
              <Route path='/Formation' element={<Formation />} />
              {isLogin && <Route path='/Profile/*' element={<Profil />} />}
              {!isLogin && <Route path='/Profile/*' element={<AuthUser />} />}
              <Route path='/signin' element={<AuthUser />} />
              <Route path="/logout" element={
                <form onSubmit={handleLogout}>
                  <LogOut />
                </form>
              } />
              <Route path="/login" element={
                <form onSubmit={handleChange} className="" method='post'>
                  <LoginUser />
                </form>
              } />
              <Route path='/detail/:id' element={<DetailPost />} />
              <Route path='/contribution/:id' element={<ModePayement />} />
              <Route path="/Visa" element={<ContributionForm/>} />
            </Routes>
            <Footer />
          </>
        }
      </ProphilUser.Provider>
    </>
  )
}

export default App
