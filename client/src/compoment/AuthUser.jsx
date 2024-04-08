import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthUser() {
    const [name, setName] = useState("");
    const [name_user, setname_user] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSignUp = async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/users/signin", data);
            if (response.status == 201) {
                return navigate('/login')
            }
            else {
                return <h2>Donnée invalide</h2>
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = "Veuillez entrer votre nom.";
        }

        if (!name_user.trim()) {
            errors.name_user = "Veuillez entrer votre pseudo.";
        }

        if (!email.trim()) {
            errors.email = "Veuillez entrer votre adresse e-mail.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Veuillez entrer une adresse e-mail valide.";
        }

        if (!password.trim()) {
            errors.password = "Veuillez entrer votre mot de passe.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("name_user", name_user);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("photo", photo);
            handleSignUp(formData);
        }
    };

    return (
        <div className="lg:flex 2xl:w-8/12 m-auto">
            <div className="bg-center lg:w-1/2 bg-no-repeat bg-[url('https://i0.wp.com/blog.mbadmb.com/wp-content/uploads/2018/01/Emo-IH.jpg?fit=600%2C440&ssl=1')] h-svh"></div>
            <div className="w-full lg:w-1/2 m-auto  pt-32 pb-16">
                <div className='space-y-16 py-10 md:border m-auto '>
                    <div className='w-11/12 space-y-2 xl:w-2/3 m-auto'>
                        <form onSubmit={handleFormSubmit} className="" method='post'>
                            <h2 className='text-5xl w-full text-center font-black'>Inscrivez-vous.</h2>
                            <div className="grid grid-cols-2 gap-4 py-6 ">
                                <input
                                    className={`w-full text-black border px-6 py-2 ${errors.name ? 'border-red-500' : ''}`}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Nom"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                                <input
                                    className={`w-full text-black border px-6 py-2 ${errors.name_user ? 'border-red-500' : ''}`}
                                    type="text"
                                    id="name_user"
                                    name="name_user"
                                    placeholder="Pseudo"
                                    value={name_user}
                                    onChange={(e) => setname_user(e.target.value)}
                                />
                                {errors.name_user && <p className="text-red-500">{errors.name_user}</p>}
                                <input
                                    className={`w-full text-black border px-6 py-2 col-span-2 ${errors.email ? 'border-red-500' : ''}`}
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                                <input
                                    className={`w-full text-black border px-6 py-2 col-span-2 ${errors.password ? 'border-red-500' : ''}`}
                                    type="text"
                                    id="password"
                                    name="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                                <input
                                    className={`w-full text-black border px-6 py-10 col-span-2 ${errors.photo ? 'border-red-500' : ''}`}
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    placeholder="Profil"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                />
                                {errors.photo && <p className="text-red-500">{errors.photo}</p>}
                            </div>
                            <button type="submit" className='w-full text-black hover:text-white rounded-full shadow-md hover:bg-blue-700 border-[1px] border-gray-900 py-2 text-center'>Créer un compte</button>
                            <p className='text-xs text-zinc-700'>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>
                        </form>
                    </div>
                    <div className='w-11/12 xl:w-2/3 m-auto '>
                        <h3 className='text-xl pb-6 text-center'>Vous avez déjà un compte ? <Link to='/login' className="text-blue-500 text-center hover:text-blue-800" > <span >Cliquez ici</span> </Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
