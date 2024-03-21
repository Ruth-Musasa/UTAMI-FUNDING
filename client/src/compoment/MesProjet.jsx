import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Option from "../compoment/Option";
import PostEditor from "./PostEditor";
import axios from 'axios'
import Projets from "./Projets";
export default function MesProjets() {
    // const user = useContext(ProphilUser)
    const [posts, setposts] = useState([]);
    const [image, setImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form);
        let post = Object.fromEntries(data)
        form.reset()
        uploadImage(post.image);
        let userpost =
        {
            "id": posts.length + 1,
            "title": post.title,
            "description": post.description,
            "img": image,
            "time": post.time,
            "contrib": post.contrib

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
    const [projet, setProjet] = useState(false)
    if (projet) {
        return (
            <div>
                <h2 className=" text-4xl mt-11 mb-7  md:text-6xl">Voici vos projets</h2>
                <form onSubmit={handleSubmit} >
                    <PostEditor />
                </form>
                <div>
                    {
                        posts.map((data, index) => <Projets
                            post={data}
                            key={data.id}
                            title={data.title}
                            description={data.description}
                            time={data.time}
                            contrib={data.contrib}
                            image={data.image}
                            index={index}
                        />)
                    }
                </div>
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