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
    const [issearching, setIssearching] = useState(false);
    const [mode, setMode] = useState('list');

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
        setMode('search')
        setIssearching(true)
        try {
            const response = await axios.get(`http://localhost:5000/search/projets?q=${searchTerm}`);
            if (response.status) {
                setSearch(response.data);
                setIssearching(false)
            }
        } catch (error) {
            setIssearching(false)
            console.error("Error searching:", error);
        }
    };
    return (
        <div className="w-11/12  m-auto h-auto py-20 ">
            <div className="flex gap-6 pb-10">
                <div className=" md:w-11/12 m-auto">
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
            </div>
            <div className="md:w-11/12 w-full m-auto">
                {issearching ? (
                    <span>loading</span>
                ) : search.length > 0 ? (
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
                    </div>) :
                    (mode == 'search' && <h3 className=" text-2xl my-11 lg:mb-7 text-center md:text-4xl  text-red-500 font-black ">Aucun projet ne correspond a cette recherche . . .</h3>)
                }
                <h3 className=" m-auto w-11/12 text-4xl mt-4 lg:mb-7  md:text-6xl  font-black ">Projets recommandée</h3>
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