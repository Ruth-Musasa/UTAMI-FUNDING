export default function AuthUser() {
    // const [user, setUser] = useState(null);
    // const [loginUser, setLoginuser] = useState(null);
    // const [isLogin, SetIsLogin] = useState(false);
    // const handleChange = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const form = e.target
    //         let data = new FormData(form);
    //         let login = Object.fromEntries(data)
    //         form.reset()
    //         const credentials =
    //         {
    //             "email": login.email,
    //             "password": login.code
    //         }
    //         const url = 'http://localhost:3000/users/login'
    //         const rep = await axios.post(url, {
    //             email: credentials.email,
    //             password: credentials.password
    //         })
    //         if (rep.status == 200) {
    //             const { id, token } = rep.data;
    //             SetIsLogin(true);
    //             setUser(token)
    //             const dataJson = `http://localhost:3000/users/${token}`
    //             axios.get(dataJson)
    //                 .then(res => {
    //                     setLoginuser(res.data.user)
    //                 })
    //             console.log(loginUser, 'ok');
    //         }
    //         else {
    //             console.error('Auth err');
    //         }
    //     }
    //     catch (error) {
    //         console.error('Axios err');
    //     }
    // }

    return (
        <div className="w-full xl:w-1/3 m-auto h-auto pt-20 pb-10">
            <div className='space-y-16 py-10 md:border m-auto'>
                {/* <h1 className='text-6xl md:text-7xl text-center '>Ça se passe maintenant</h1> */}
                <div className='w-11/12 space-y-2 xl:w-2/3 m-auto'>
                    <h2 className='text-4xl w-full text-center'>Inscrivez vous.</h2>
                    <div className="grid grid-cols-2 gap-4 py-6 ">
                        <input className='w-full text-black border px-6 py-2' type="text" placeholder="Nom" />
                        <input className='w-full text-black border px-6 py-2' type="text" placeholder="Pseudo" />
                        <input className='w-full text-black border px-6 py-2 col-span-2' type="text" placeholder="Email" />
                        <input className='w-full text-black border px-6 py-2 col-span-2' type="text" placeholder="Mots de passe" />
                        <input className="w-full text-black border px-6 py-10 col-span-2" type="file" placeholder="Profil" />
                    </div>
                    <button className='w-full text-black hover:text-white rounded-full shadow-md hover:bg-zinc-700 border-[1px] border-gray-900 py-2 text-center'>Crée un compte</button>
                    <p className='text-xs text-zinc-700'>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>
                </div>
                <div className='w-11/12 xl:w-2/3 m-auto'>
                    <h3 className='text-xl pb-6 text-center'>Vous avez déjà un compte ?</h3>
                    <div className="grid grid-cols-2 gap-4 py-6">
                        <input className='w-full text-black border px-6 py-2' type="text" placeholder="Email" />
                        <input className='w-full text-black border px-6 py-2' type="text" placeholder="Mots de passe" />
                    </div>
                    <button type="submit" className='w-full text-black rounded-full shadow-md hover:bg-zinc-700 hover:text-white border-[1px] border-gray-900 py-2 text-center' >Se connecter</button>
                </div>
            </div>
        </div>
    )

}