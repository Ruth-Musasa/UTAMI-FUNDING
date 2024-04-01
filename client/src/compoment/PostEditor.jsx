import axios from "axios";
import React, { useContext, useState } from "react";
import { ProphilUser } from "../App";

export default function PostEditor() {
    const [title, setTitle] = useState("");
    const [categorie, setCategorie] = useState("");
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState("");
    const [desired_amount, setDesired_amount] = useState("");
    const [end_date, setEnd_date] = useState("");
    const [errors, setErrors] = useState({});
    const user = useContext(ProphilUser);

    const handleSubmit = async (data) => {
        try {
            const response = await axios.post(`http://localhost:5000/projets`, data);
            console.log(response.status, 'response.status');
        } catch (error) {
            console.error('Erreur de connexion:', error);
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!title.trim()) {
            errors.title = "Veuillez entrer un titre pour votre projet.";
        }

        if (!photo) {
            errors.photo = "Veuillez choisir une photo pour votre projet.";
        }

        if (!description.trim()) {
            errors.description = "Veuillez décrire votre projet.";
        }

        if (!desired_amount.trim()) {
            errors.desired_amount = "Veuillez renseigner le montant souhaité.";
        } else if (isNaN(desired_amount)) {
            errors.desired_amount = "Le montant doit être un nombre.";
        }

        if (!end_date) {
            errors.end_date = "Veuillez renseigner la date limite de contribution.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        const form = e.target;
        const data = new FormData(form)
        if (isValid) {
            handleSubmit(data);
            form.reset();
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="w-11/12 m-auto grid gap-4">
                <h2 className="text-4xl mt-12 md:text-4xl ">Publiez un nouveau projet en remplissant tous les champs ci-dessous : </h2>
                <div className="grid gap-6">
                    <div>
                        <label className='lg:text-xl ' htmlFor="">Quel est le titre de votre Projet? <span className="text-red-500"> *</span></label>
                        <textarea
                            placeholder="Ecrivez ici"
                            name="title"
                            id='title'
                            cols="30"
                            rows="2"
                            className={`mt-1 w-full  h-12 bg-zinc-100 focus:border-black outline-none ${errors.title ? 'border-red-500' : ''}`}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></textarea>
                        {errors.title && <p className="text-red-500">{errors.title}</p>}
                    </div>
                    <div>
                        <label className='lg:text-xl ' htmlFor="categorie">Quel est la categorie de votre Projet? <span className="text-red-500"> *</span></label>
                        <textarea
                            placeholder="Ex: Projet d'agriculture "
                            name="categorie"
                            id='categorie'
                            cols="30"
                            rows="2"
                            className={`mt-1 w-full  h-12 bg-zinc-100 focus:border-black outline-none ${errors.categorie ? 'border-red-500' : ''}`}
                            value={categorie}
                            onChange={(e) => setCategorie(e.target.value)}
                        ></textarea>
                        {errors.categorie && <p className="text-red-500">{errors.categorie}</p>}
                    </div>
                    <div>
                        <label htmlFor="photo" className='lg:text-xl '>Ajouter une photo <span className="text-red-500"> *</span></label>
                        <input
                            type="file"
                            name="photo"
                            id="photo"
                            className={`mt-1 h-40 w-full bg-zinc-100 text-center ${errors.photo ? 'border-red-500' : ''}`}
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                        {errors.photo && <p className="text-red-500">{errors.photo}</p>}
                    </div>
                    <div>
                        <label htmlFor="description" className='lg:text-xl '>Décrivez nous votre Projet <span className="text-red-500"> *</span></label>
                        <textarea
                            placeholder="Ecrivez ici"
                            name="description"
                            id='description'
                            cols="30"
                            rows="50"
                            className={`mt-1 w-full xl:h-96 bg-zinc-100 focus:border-black outline-none ${errors.description ? 'border-red-500' : ''}`}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        {errors.description && <p className="text-red-500">{errors.description}</p>}
                    </div>
                    <div>
                        <label htmlFor="desired_amount" className='lg:text-xl '>Renseignez le montant voulue en dollard <span className="text-red-500"> *</span></label>
                        <input
                            type="text"
                            placeholder="Ecrivez ici"
                            name="desired_amount"
                            id="desired_amount"
                            className={`mt-1 h-10 w-full bg-zinc-100 ${errors.desired_amount ? 'border-red-500' : ''}`}
                            value={desired_amount}
                            onChange={(e) => setDesired_amount(e.target.value)}
                        />
                        {errors.desired_amount && <p className="text-red-500">{errors.desired_amount}</p>}
                    </div>
                    <div>
                        <label htmlFor="end_date" className='lg:text-xl '>Renseignez la date limite de contribution <span className="text-red-500"> *</span></label>
                        <input
                            type="date"
                            placeholder="Ecrivez ici"
                            name="end_date"
                            id="end_date"
                            className={`mt-1 h-10 w-full bg-zinc-100 ${errors.end_date ? 'border-red-500' : ''}`}
                            value={end_date}
                            onChange={(e) => setEnd_date(e.target.value)}
                        />
                        {errors.end_date && <p className="text-red-500">{errors.end_date}</p>}
                    </div>
                </div>
                <button type="submit" className="w-1/4 self-center bg-[#3563FF] rounded-full text-white text-lg font-normal leading-5 py-2 mb-10 px-5 ">Poster</button>
            </div>
        </form>
    );
}
