import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

export default function Header(props) {

    return (
        <div>
            <div className="fixed bg-[#F3F3F3] w-full md:hidden">
                <div className="h-14 flex justify-between items-center w-11/12 m-auto">
                    <div className=" self-center"><img className='h-28' src="../src/assets/coconut_._1_-removebg-preview.png" alt="" /></div>
                    
                    <Link to='/Connexion'><button className="self-center bg-[#3563FF] rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 m-auto">Commencer</button></Link>
                    {props.children}
                </div>
            </div>
            <div className="invisible h-0 md:visible md:h-16 bg-[#F3F3F3] fixed md:w-full md:flex justify-between md:px-10">
                <div className="h-14 flex  items-center ">
                    <div className=" self-center"><img className='h-28' src="../src/assets/coconut_._1_-removebg-preview.png" alt="" /></div>
                    <div className=" md:pl-8 self-center md:flex md:gap-12">
                        <Link to='/'>Home </Link >
                        <Link to='Explore' >Explore</Link >
                        <Link to='Formation' className="md:border-r md:pr-12" >Formation</Link >
                        <Link to='Profile'>Profile</Link >
                    </div>
                </div>
                <div className="self-center md:flex md:gap-6">
                    <Link to='/Connexion' ><button className="self-center bg-[#3563FF] rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5">Commencer</button></Link>
                </div>
            </div>
        </div>
    )
}