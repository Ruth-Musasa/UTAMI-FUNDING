import { Link } from "react-router-dom";

export default function AuthUser() {
    return (
        <div className="w-full xl:w-1/3 m-auto h-auto pt-20 pb-10">
            <div className='space-y-16 py-10 md:border m-auto'>
                <div className='w-11/12 space-y-2 xl:w-2/3 m-auto'>
                    <h2 className='text-4xl w-full text-center'>Inscrivez vous.</h2>
                    <div className="grid grid-cols-2 gap-4 py-6 ">
                        <input className='w-full text-black border px-6 py-2' type="text" id="name" name="name" placeholder="Nom" />
                        <input className='w-full text-black border px-6 py-2' type="text" id="name_user" name="name_user" placeholder="Pseudo" />
                        <input className='w-full text-black border px-6 py-2 col-span-2' type="text" id="email" name="email" placeholder="Email" />
                        <input className='w-full text-black border px-6 py-2 col-span-2' type="text" id="password" name="password" placeholder="Mots de passe" />
                        <input className="w-full text-black border px-6 py-10 col-span-2" type="file" id="photo" name="photo" placeholder="Profil" />
                    </div>
                    <button className='w-full text-black hover:text-white rounded-full shadow-md hover:bg-zinc-700 border-[1px] border-gray-900 py-2 text-center'>Crée un compte</button>
                    <p className='text-xs text-zinc-700'>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>
                </div>
                <div className='w-11/12 xl:w-2/3 m-auto'>
                    <h3 className='text-xl pb-6 text-center'>Vous avez déjà un compte ?</h3>
                    <Link to='/login'> <button type="submit" className='w-full text-black rounded-full shadow-md hover:bg-zinc-700 hover:text-white border-[1px] border-gray-900 py-2 text-center' >Se connecter</button></Link>
                </div>
            </div>
        </div>
    )
}