import { useContext, useEffect, useState } from "react";
import ProjetTypes from "../compoment/ProjetType";
import Projets from "../compoment/Projets";
import { ProphilUser } from "../App";
import axios from "axios";

export default function Explore() {
    const user = useContext(ProphilUser)
    const [post, setPost] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [search, setSearch] = useState([]);
    useEffect(() => {
        const dataJson = 'http://localhost:5000/projets'
        axios.get(dataJson)
            .then(res => {
                setPost(res.data)
            })
    }, [])
    useEffect(() => {
        const dataJson = 'http://localhost:5000/users'
        axios.get(dataJson)
            .then(res => {
                setUsers(res.data)
            })
    }, [])
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/search/projets?q=${searchTerm}`);
            if (response.status) {
                setSearch(response.data);
            }
        } catch (error) {
            console.error("Error searching:", error);
        }
    };
    return (
        <div className="w-11/12  m-auto h-auto py-20 ">
            <div className="flex gap-6 pb-10">
                <div className="pl-6 w-10/12 m-auto">
                    <div className="h-11 rounded-full border-2 flex gap-6 justify-between ">
                        <div className=" w-full flex gap-4">
                            <input
                                className="w-full pl-10 rounded-full  outline-none"
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Chercher un post"
                            />
                        </div>
                        <button onClick={handleSearch} className="grid bg-zinc-700 h-full w-20 rounded-full content-around justify-center"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path className="fill-white" d="M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z" fill="#D9D9D9" />
                        </svg></button>
                    </div>
                </div>
                <div className="text-xl w-1/12 "><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" /></svg></div>
            </div>
            <div className="md:w-11/12 w-full m-auto">
                <div className="flex h-auto overflow-x-scroll gap-4 md:gap-12">
                    <ProjetTypes type="Projet architectural" classe="bg-cover bg-[url('client/src/assets/8be8502369c21819b8bb0ad6a8b0afad.jpg')] w-80  lg:h-80 lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                    <ProjetTypes type="Projet agricole" classe="bg-[url('client/src/assets/bd5c4f3b2249a310be4dcf50644cbefe.jpg')] w-80  lg:h-80  lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                    <ProjetTypes type="Projet gastronomique" classe="bg-[url('client/src/assets/c53b881e891566634ff68349842b5d7c.jpg')] w-80  lg:h-80 lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                    <ProjetTypes type="Projet modelisme" classe="bg-[url('client/src/assets/a80f7343138d26af55ddc65c8ed70383.jpg')] w-80  lg:h-80  lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                </div>
                {search.length > 0 && (
                    <div>
                        <h3 className=" text-4xl mt-11 lg:mb-7  md:text-6xl  font-black ">Voici le reultat de votre recherche:</h3>
                        <ul>
                            {search.map((data) => (
                                <Projets
                                    data={data}
                                    key={data.id_post}
                                />
                            ))}
                        </ul>
                    </div>
                )}
                {/* {search.length == 0 && (
                    <h3 className=" text-2xl my-11 lg:mb-7 text-center md:text-4xl  text-red-500 font-black ">Aucun projet ne correspond a cette recherche . . .</h3>
                )} */}
                <h3 className=" text-4xl mt-11 lg:mb-7  md:text-6xl  font-black ">Projets reçents</h3>
                {
                    post.map((data, index) => {
                        return (
                            <Projets
                                data={data}
                                key={data.id_post}
                            />
                        );
                    })
                }

            </div>
        </div>
    )
}