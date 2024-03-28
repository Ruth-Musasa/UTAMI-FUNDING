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
        const dataJson = `http://localhost:5000/projets/${user.id_user} `
        axios.get(dataJson)
            .then(res => {
                setposts(res.data)
            })
    }, [])
    console.log(posts, 'post');
    if (posts == []) {
        return (
            <div>
                <h2 className=" text-4xl mt-11 mb-7  md:text-6xl">Voici vos projets</h2>

                <PostEditor />
                {
                    posts.map((data, index) => {
                        return (
                            <Projets
                                data={data}
                                key={data.id_post}
                            />
                        );
                    })
                }
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