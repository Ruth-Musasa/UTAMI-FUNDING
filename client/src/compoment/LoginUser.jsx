export default function LoginUser(params) {
    return (
        <div className="w-full xl:w-1/3 m-auto h-auto pt-20 pb-10">
            <div className='space-y-16 py-10 md:border m-auto'>
                <div className='w-11/12 space-y-2 xl:w-2/3 m-auto'>
                    <h2 className='text-4xl w-full text-center'>Connectez vous.</h2>
                    <div className=" grid  gap-4 py-6 w-10/12 m-auto">
                        <input className='w-full text-black border px-6 py-2' type="text" id="email" name="email" placeholder="Email" />
                        <input className='w-full text-black border px-6 py-2' type="text" id="password" name="password" placeholder="Mots de passe" />
                    </div>
                    <button type="submit" className='w-full text-black rounded-full shadow-md hover:bg-zinc-700 hover:text-white border-[1px] border-gray-900 py-2 text-center' >Se connecter</button>
                    <p className='text-xs text-zinc-700'>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>
                </div>

            </div>
        </div>
    )
}