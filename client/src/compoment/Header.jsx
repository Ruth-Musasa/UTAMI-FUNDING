import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import ConnexionButton from './ConnexionButton'
import { useContext } from 'react';
import { ProphilUser } from '../App';

export default function Header(props) {
    const user = useContext(ProphilUser);
    return (
        <div>
            <div className="fixed bg-[#F3F3F3] w-full md:hidden">
                <div className="h-14 flex justify-between items-center w-11/12 m-auto">
                    <div className=" self-center h-28 w-1/3 bg-cover bg-center bg-[url('client/src/assets/coconut_._1_-removebg-preview.png')] "></div>
                    <ConnexionButton />
                    {props.children}
                </div>
            </div>
            <div className="invisible h-0 md:visible md:h-16 bg-[#F3F3F3] fixed md:w-full md:flex justify-between md:px-10">
                <div className="h-14 flex  items-center ">
                    <div className=" self-center h-28 w-36 bg-cover bg-center bg-[url('client/src/assets/coconut_._1_-removebg-preview.png')]"> </div>
                    <div className=" md:pl-8 self-center md:flex md:gap-12">
                        <Link to='/' className='focus:font-black focus:text-[#3563FF] hover:text-[#3563FF]'>Home </Link >
                        <Link to='Explore' className='focus:font-black focus:text-[#3563FF] hover:text-[#3563FF]'>Explore</Link >
                        <Link to='Formation' className="md:border-r border-black md:pr-12 focus:font-black focus:text-[#3563FF] hover:text-[#3563FF]" >Formation</Link >
                        <Link to='Profile' className='focus:font-black focus:text-[#3563FF] hover:text-[#3563FF]'>Profile</Link >
                    </div>
                </div>
                <div className="self-center md:flex md:gap-6 items-center">
                    {(user !== null) && <Link to="/logout"> <span className='hover:text-[#3563FF] m-auto '>Logout</span></Link>}
                    {(user === null) && <Link to="/login"> <span className='hover:text-[#3563FF] m-auto'>Login</span></Link>}
                    <ConnexionButton />
                </div>
            </div>
        </div>
    )
}