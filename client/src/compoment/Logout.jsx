export default function LogOut() {
    return (
        <div className="w-full xl:w-1/3 m-auto h-auto pt-20 pb-10">
            <div className='space-y-16 py-10 md:border m-auto'>
                <div className='w-11/12 space-y-2 xl:w-2/3 m-auto'>
                    <h2 className='text-4xl w-full text-center'>Etes vous sur de vouloir vous deconnectez ?</h2>
                    <button type="submit" className='w-full text-black rounded-full shadow-md hover:bg-zinc-700 hover:text-white border-[1px] border-gray-900 py-2 text-center' >Se deconnecter</button>
                    <p className='text-xs text-zinc-700'>En vous deconnectant, vous perdrez certain fonctionnalité importante pour l'utilisation de ce site, pour une meilleure experiance nous vous conseillons de ne pas vous deconnecter.</p>
                </div>

            </div>
        </div>
    )

}