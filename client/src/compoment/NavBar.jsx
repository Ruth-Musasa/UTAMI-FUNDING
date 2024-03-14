// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
// // import { ProphilUser } from '../App'
// import { useContext, useState } from 'react'
// // import ReactModal from 'react-modal'

// // export default function NavBar(props) {
// //     const handleTweet = () => {
// //         SetIsTweet(!isTweet);
// //     }

// //     return (

// //         <div className="h-full w-full space-y-5 flex items-stretch md:hidden ">
// //             {props.children}
// //             <div className="text-xl pr-6 w-full bg-white p-6  mt-16">
// //                 <Link to='/'> Home </Link>
// //                 <Link to='/Formation'> Formation</Link>
// //                 <Link to='/List'>  List</Link>
// //                 <Link to='/Profile'>   Profile</Link>
// //                 <Link to='/Post'>  Post </Link>
// //                 <button onClick={handleTweet} type="button" >Get Started</button>
// //             </div>
// //         </div>
// //     )
// // }

// export default function NavBar(props) {
//     return (
//         <div className="h-full w-full space-y-5 flex items-stretch md:hidden bg-black">
//             {props.children}
//             <div className="invisible h-0 md:visible md:h-16 bg-[#F3F3F3] fixed md:w-full md:flex justify-between md:px-10">
//                 <div className="h-14 flex  items-stretch ">
//                     <div className="text-3xl self-center"><img src="src/assets/Capture_d_écran_du_2024-02-28_15-21-51-removebg-preview.png" alt="" /></div>
//                     <div className=" md:pl-8 self-center md:flex md:gap-12">
//                         <Link to='/'>Home </Link >
//                         <Link to='Explore' >Explore</Link >
//                         <Link to='Formation' >Formation</Link >
//                         <Link to='Communauté' className="md:border-r md:pr-12">Communauté</Link >
//                         <Link to='Profile'>Profile</Link >
//                     </div>
//                 </div>
//                 <div className="self-center md:flex md:gap-6">
//                     <Link to='/Connexion' ><button className="self-center bg-[#3563FF] rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5">Commencer</button></Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function NavBar(props) {
    return (
        <div className="h-full w-full space-y-5 flex items-stretch md:hidden">
            {props.children}
            <div className="text-xl pr-6">
                <select className="w-full bg-black p-6  mt-16">
                    <option>Creation</option>
                    <option>Website Design</option>
                    <option>Website Templates</option>
                    <option>Advanced Web Development</option>
                    <option>Mobile App</option>
                    <option>Hire a Professional</option>
                </select>
                {/* <div className="fixed w-full">
                    <div className=" w-full bg-white p-6 mt-80">
                        <button className="bg-white border-4 text-[#166aea] rounded-full p-5 w-full mb-2">Login</button>
                        <button className="bg-[#166aea] border text-white rounded-full p-5 w-full">Get started</button>
                    </div>
                </div>
                <select className="w-full bg-white p-6">
                    <option>Busness</option>
                    <option>Website Design</option>
                    <option>Website Templates</option>
                    <option>Advanced Web Development</option>
                    <option>Mobile App</option>
                    <option>Hire a Professional</option>
                </select>
                <div className="p-6 w-full" > Resources</div>
                <div className="p-6 w-full"> Pricing </div>
                <div className="p-6 w-full"> Support</div>
                <div className="p-6 w-full"> Mobile App</div>
                <div className="p-6 w-full"> Wix Studio</div>
                <div className="p-6 w-full"> Enterprise</div>
                <select className="w-full bg-white p-6 mb-80">
                    <option >English</option>
                </select> */}
            </div>
        </div>
    )
}