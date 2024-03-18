import { useState } from "react"
import { Link } from "react-router-dom"

export default function Mescomments() {
    const [comment, setComment] = useState(false)
    if (comment) {
        return (
            <div>
                <h2 className=" text-4xl mt-11 mb-7  md:text-6xl">Voici vos commentaires</h2>
            </div>
        )
    }
    return (
        <div className="w-10/12 m-auto">
            <h2 className=" text-4xl mt-11 mb-7  md:text-6xl">Vous n'avez aucun commentaire</h2>
        </div>
    )
}