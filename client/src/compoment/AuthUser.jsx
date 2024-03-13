export default function AuthUser() {
    const [user, setUser] = useState(null);
    const [loginUser, setLoginuser] = useState(null);
    const [isLogin, SetIsLogin] = useState(false);
    const handleChange = async (e) => {
        e.preventDefault()
        try {
            const form = e.target
            let data = new FormData(form);
            let login = Object.fromEntries(data)
            form.reset()
            const credentials =
            {
                "email": login.email,
                "password": login.code
            }
            const url = 'http://localhost:3000/users/login'
            const rep = await axios.post(url, {
                email: credentials.email,
                password: credentials.password
            })
            if (rep.status == 200) {
                const { id, token } = rep.data;
                SetIsLogin(true);
                setUser(token)
                const dataJson = `http://localhost:3000/users/${token}`
                axios.get(dataJson)
                    .then(res => {
                        setLoginuser(res.data.user)
                    })
                console.log(loginUser, 'ok');
            }
            else {
                console.error('Auth err');
            }
        }
        catch (error) {
            console.error('Axios err');
        }
    }
    const handleLogin = () => {
        SetIsLogin(!isLogin);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }
    return (
        <div className='flex text-white xl:my-48 mx-[15%] space-x-72' >
            <img src="src/assets/Icons/Twitter.svg" alt="" className='h-96 my-24' />
            <div className='space-y-16 '>
                <h1 className='text-7xl'>Ça se passe maintenant</h1>
                <div className='w-1/2 space-y-2'>
                    <h2 className='text-4xl w-full pb-6'>Inscrivez vous.</h2>
                    <button className='w-full text-white rounded-full shadow-md hover:bg-zinc-700 border-[1px] border-gray-900 py-2 text-center'>S'inscrire avec Google</button>
                    <div className='w-full text-center'>ou </div>
                    <button className='w-full btn-primary py-2 '>Crée un compte</button>
                    <p className='text-xs text-zinc-700'>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-xl pb-6'>Vous avez déjà un compte ?</h3>
                    <button className='w-full text-white rounded-full shadow-md hover:bg-zinc-700 border-[1px] border-gray-900 py-2 text-center' onClick={handleLogin}>Se connecter</button>
                </div>
            </div>
            <ReactModal
                isOpen={isLogin}
                style={customStyles}
                onRequestClose={handleLogin}
                shouldCloseOnOverlayClick={true} >
                <form onSubmit={handleChange} className="" action='http://localhost:3000/logins/login' method='post'>
                    <Connexion />
                </form>
            </ReactModal>
        </div>
    )

}