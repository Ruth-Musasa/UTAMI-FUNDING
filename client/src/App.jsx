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
      const response = await axios.post('http://localhost:5000/users/login', passUser);
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
  const handeleSignin = async (signinUser) => {
    console.log(signinUser , 'signinUser');

    try {
      const response = await axios.post("http://localhost:5000/users/signin", signinUser);
      if (response.status == 200) {
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        setAuthToken(token);
        setIsLogin(true);
        setIsSignin(true)
        setUser(user);
        return navigate('/')
      }
     else {
      return <h2>Donnée invalide</h2>
     }

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
    console.log(login , 'login');
  };
  const handelConnect = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const login = Object.fromEntries(data);
    form.reset();
    handeleSignin(login)
    console.log(login , 'login');
  };

  return (
    <>
      <ProphilUser.Provider value={user}>
        {/* <Router> */}
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
              <Route path='/Connexion' element={
                <form onSubmit={handelConnect} className="" action='http://localhost:5000/users/signin' method='post'>
                  <AuthUser />
                </form>} />
              {isLogin &&
                <Route path="/logout" element={
                  <form onSubmit={handleLogout}>
                    <LogOut />
                  </form>
                } />
              }
              {!isLogin && (
                <Route path="/login" element={
                  <form onSubmit={handleChange} className="" action='http://localhost:5000/users/login' method='post'>
                    <LoginUser />
                  </form>
                } />
              )}
              <Route path='/detail/:id' element={<DetailPost />} />
            </Routes>
            <div className="md:border py-4 bg-[#F3F3F3]">
              <div className="w-10/12 m-auto md:flex md:justify-between md:pb-2">
                <div className="flex h-8 w-auto m-auto justify-between md:gap-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                </div>
                <div className="flex flex-wrap leading-loose m-auto ">
                  <span className="pr-6">Conditions d'utilisation</span>
                  <span className="pr-6">Privacy Policy</span>
                  <span>2024 © R_Muss Tous droits réservés.</span>
                </div>
              </div>
            </div>
          </>
        }
        {/* </Router> */}
      </ProphilUser.Provider>
    </>
  )
}

export default App
