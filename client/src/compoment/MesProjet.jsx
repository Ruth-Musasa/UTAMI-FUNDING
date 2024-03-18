import { useState } from "react"
import { Link } from "react-router-dom"

export default function MesProjets() {
    const [projet, setProjet] = useState(false)
    if (projet) {
        return (
            <div>
                <h2 className=" text-4xl mt-11 mb-7  md:text-6xl">Voici vos projets</h2>
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