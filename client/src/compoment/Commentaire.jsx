import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Mescomments() {
    const { id } = useParams();
    const [comment, setComment] = useState([])
    useEffect(() => {
        const dataJson = `https://utami-funding-1.onrender.com/comment/projet/${id}`
        axios.get(dataJson)
            .then(res => {
                setComment(res.data)
            })
    }, [])
    const formatDate = dateString => {
        const creationDate = new Date(dateString);
        const year = creationDate.getFullYear();
        const month = String(creationDate.getMonth() + 1).padStart(2, '0');
        const day = String(creationDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    return (
        <div>
            {
                comment.map((data) => {
                    return (
                        <div className="flex m-4 p-4 rounded-lg justify-between ">
                            <div className="flex gap-4 ">
                                <img
                                    className="w-14 h-14 border rounded-full"
                                    src={`${import.meta.env.VITE_SERVER_URL}${data.creator.photo}`}
                                    alt={data.creator.name}
                                />
                                <div className="bg-gray-100 flex gap-10 px-4  ">
                                    <div className="">
                                        <h4 className="font-black">{data.creator.name} </h4>
                                        <p className="text-wrap">{data.contenu}</p>
                                    </div>
                                    <p >{formatDate(data.date_creation)} </p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            {comment.length == 0 ? <p className="text-black w-10/12 text-3xl md:text-6xl m-auto py-10">Aucun commentaire n'a etait ecrit sur ce poste </p> : null}
        </div>
    )
}