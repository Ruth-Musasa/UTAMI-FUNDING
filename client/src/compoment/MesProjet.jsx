import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PostEditor from "./PostEditor";
import axios from 'axios';
import Projets from "./Projets";
import { ProphilUser } from "../App";
export default function MesProjets() {
    const user = useContext(ProphilUser)
    const [posts, setposts] = useState([]);
    const [image, setImage] = useState('');
    useEffect(() => {
        const dataJson = `http://localhost:5000/projets/${user.id} `
        axios.get(dataJson)
            .then(res => {
                setposts(res.data)
            })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form);
        let post = Object.fromEntries(data)
        form.reset()
        uploadImage(post.image);
        let userpost =
        {
            "id_creator": user.id,
            "title": post.title,
            "description": post.description,
            "photo": image,
            "end_date": post.end_date,
            "categorie": post.categorie,
            "desired_amount": post.desired_amount,

        }
        setposts([userpost, ...posts])
    }
    const uploadImage = (file) => {
        if (file.size > 0) {
            return showFile(file)
        }
        return null;
    }
    const showFile = (file) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setImage(fileReader.result);
        }
    }
    if (posts == []) {
        return (
            <div>
                <h2 className=" text-4xl mt-11 mb-7  md:text-6xl">Voici vos projets</h2>
                <form onSubmit={handleSubmit} >
                    <PostEditor />
                </form>
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
        <div className="w-10/12 m-auto">
            <h2 className=" text-4xl mt-11 mb-7  md:text-6xl">Aucun projet publié pour l'instant</h2>
            <Link to='Editor' ><button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 hover:bg-[#3563FF]">Publier</button></Link>
        </div>
    )
}