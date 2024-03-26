import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import DetailPost from '../compoment/DetailPost';
import PostEditor from '../compoment/PostEditor';
import MesProjets from '../compoment/MesProjet';
import Mescomments from '../compoment/Commentaire';
import { ProphilUser } from '../App';
import { useContext } from 'react';
import AuthUser from '../compoment/AuthUser';
export default function Profil() {
    const user = useContext(ProphilUser);
    if (user !== null && user !== undefined ) {
        return (
            <div className="lg:flex lg:gap-10 lg:w-9/12 m-auto pt-20" >
                <div className='w-full xl:w-1/3 border border-gray-200 '>
                    <div className="grid lg:gap-6 xl:pb-16">
                        <div className=' flex justify-around md:block '>
                            <div className='relative '>
                                <div className="h-24 w-24 lg:h-96 lg:w-96 border bg-gray-200  m-auto bg-cover rounded-full"><img src={`${import.meta.env.VITE_SERVER_URL}${user.photo}`} alt="photo de profil" /> </div>
                                <button className="bg-white text-black w-10 h-10 border-[1px] rounded-full shadow-md hover:bg-zinc-800 border-gray-900 text-2xl font-black m-auto absolute  bottom-1 left-16 md:right-14 md:bottom-10 md:left-auto hover:text-white" type="button">+</button>
                            </div>
                            <div className='lg:w-10/12 lg:m-auto'>
                                <h2 className='text-3xl md:text-4xl font-black '>{user.name} </h2>
                                <span className="text-xl text-zinc-500 lg:text-2xl font-black"> @ {user.name_user}</span>
                            </div>
                        </div>
                        <div className="flex text-zinc-500 w-10/12 m-auto">
                            <span className="pl-2 "> {user.Joined} </span>
                        </div>
                        <div className="w-10/12 m-auto grid gap-4 border-t border-gray-300 text-xl ">
                            <Link className='flex gap-6 hover:border-b-4 hover:border-b-sky-700 hover:text-[#3563FF] hover:h-10 mt-4 focus:font-black focus:text-[#3563FF] ' to=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-6'><path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" /></svg> Mes Projet</Link>
                            <Link className='flex  gap-4 hover:border-b-4 hover:border-b-sky-700 hover:text-[#3563FF] hover:h-10 focus:font-black focus:text-[#3563FF] ' to='Commentaires'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='h-6' ><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" /></svg> Commentaires</Link>
                            <Link className='flex  gap-6 hover:border-b-4 hover:border-b-sky-700 hover:text-[#3563FF] hover:h-10 focus:font-black focus:text-[#3563FF] ' to='Editor'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-6'><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>Poster</Link>
                        </div>
                    </div>
                </div>
                <div className='xl:w-2/3 border border-gray-200'>
                    <Routes>
                        <Route path='' element={<MesProjets />} />
                        <Route path='Commentaires' element={<Mescomments />} />
                        <Route path='Editor' element={<PostEditor />} />
                    </Routes>
                </div>
            </div>
        )
    }
    else {
        return (
            <AuthUser />
        )
    }
}
