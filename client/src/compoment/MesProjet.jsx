import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PostEditor from "./PostEditor";
import axios from 'axios';
import Projets from "./Projets";
import { ProphilUser } from "../App";
export default function MesProjets() {
    const user = useContext(ProphilUser)
    const [posts, setposts] = useState([]);
    useEffect(() => {
        const dataJson = `https://utami-funding-1.onrender.com/projets/${user.id_user} `
        axios.get(dataJson)
            .then(res => {
                setposts(res.data)
            })
    }, [])
    if (posts != []) {
        return (
            <div>
                <h2 className="w-11/12 m-auto text-4xl mt-11 mb-7 lg:text-6xl ">Voici vos projets</h2>
                <div className="overflow-y-scroll  h-[500px] ">
                    {
                        posts.map((data) =>
                            <Projets
                                data={data}
                                key={data.id_post}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
    return (
        <div className="w-10/12 m-auto py-12">
            <h2 className=" text-4xl md:text-6xl pb-4">Aucun projet publié pour l'instant</h2>
            <Link to='Editor' ><button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 hover:bg-[#3563FF]">Publier</button></Link>
        </div>
    )
}