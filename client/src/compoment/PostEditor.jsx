import { useState } from "react"

export default function PostEditor(props) {
    const  [erreur , setError]=useState('')
    return (
        <div className="w-11/12 m-auto grid gap-4">
            <h2 className="text-4xl mt-12 md:text-4xl ">Publiez un nouveau projet en remplissant tous les champs ci-dessous : </h2>
            <div className="grid gap-6">
                <div>
                    <label className='lg:text-xl ' htmlFor="">Quel est le titre de votre Projet? <span className="text-red-500"> *</span></label>
                    <textarea placeholder="Ecrivez ici" name="title" id='title' cols="30" rows="2" className="mt-1 w-full  h-12 bg-zinc-100 focus:border-black outline-none"></textarea>
                </div>
                <div >
                    <label htmlFor="photo" className='lg:text-xl '>Ajouter une photo <span className="text-red-500"> *</span></label>
                    <input type="file" name="photo" id="photo" className="mt-1  h-40 w-full bg-zinc-100 text-center" />
                </div>
                <div>
                    <label htmlFor="description" className='lg:text-xl '>Décrivez nous votre Projet <span className="text-red-500"> *</span></label>
                    <textarea placeholder="Ecrivez ici" name="description" id='description' cols="30" rows="50" className="mt-1  w-full xl:h-96 bg-zinc-100 focus:border-black outline-none"></textarea>
                </div>
                <div >
                    <label htmlFor="desired_amount" className='lg:text-xl '>Renseignez le montant voulue en dollard <span className="text-red-500"> *</span></label>
                    <input type="text" placeholder="Ecrivez ici" name="desired_amount" id="desired_amount" className="mt-1  h-10 w-full bg-zinc-100 " />
                </div>
                <div >
                    <label htmlFor="end_date" className='lg:text-xl '>Renseignez la date limite de contribution <span className="text-red-500"> *</span></label>
                    <input type="date" placeholder="Ecrivez ici" name="end_date" id="end_date" className="mt-1  h-10 w-full bg-zinc-100 " />
                </div>
            </div>

            <button type="submit" className="w-1/4  self-center bg-[#3563FF] rounded-full text-white text-lg font-normal leading-5 py-2 mb-10 px-5 ">Poster</button>
        </div>
    )
}