export default function LogOut() {
    return (
        <div className="lg:flex w-8/12 m-auto ">
            <div className="bg-center w-1/2  bg-no-repeat bg-[url('https://cdn-icons-png.flaticon.com/512/8073/8073615.png')] h-svh"></div>
            <div className="w-full xl:w-1/2 m-auto h-auto pt-20 pb-10">
                <div className='space-y-16 py-10 md:border m-auto'>
                    <div className='w-11/12 space-y-2 xl:w-2/3 m-auto'>
                        <h2 className='text-5xl w-full text-center font-black pb-4'>Etes vous sur de vouloir vous deconnectez ?</h2>
                        <button type="submit" className='font-black w-full text-black rounded-full shadow-md hover:bg-blue-700 hover:text-white border-[1px] border-gray-900 py-2 text-center' >Se deconnecter</button>
                        <p className='text-xs text-zinc-700'>En vous deconnectant, vous perdrez certain fonctionnalité importante pour l'utilisation de ce site, pour une meilleure experiance nous vous conseillons de ne pas vous deconnecter.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}