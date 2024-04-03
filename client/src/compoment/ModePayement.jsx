import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContributionForm from "./Contribution";

export default function ModePayement() {
    const [montant, setmontant] = useState('');
    console.log(montant, 'eer');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

    };
    return (
        <div className=''>
            <div className='lg:flex w-10/12 m-auto h-svh'>
                <div className="bg-center w-1/2 bg-no-repeat bg-[url('client/src/assets/360_F_533133531_vLjr8NTAqZm6nQZ6VX27WIUvPhhrT847.jpg')] "></div>
                <div className='py-40 m-auto w-1/2  lg:w-1/3 grid gap-6'>
                    <h2 className='text-5xl w-full text-center font-black'>Quel montent souhaitez vous payer ?</h2>
                    <form className='grid gap-4'>
                        <div>
                            <label className='text-xl '>Montant a payer </label>
                            <input className='w-full text-black border px-6 py-2  border-2 rounded-xl' type="number" value={montant} onChange={(e) => setmontant(e.target.value)} required />
                        </div>
                        <div className="grid grid-cols-2 gap-6 pb-6">
                            <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl">50$</button>
                            <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl">100$</button>
                            <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl">200$</button>
                            <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl">500$</button>
                        </div>
                        <div className="grid gap-2">
                            <button onSubmit={handleSubmit} className='text-2xl font black bg-black w-full m-auto text-white rounded-full shadow-md hover:bg-blue-700 border-[1px] border-gray-900 py-2 text-center' type="submit">Payer avec mobile money</button>
                            <Link to='/Visa'><button className='text-2xl font black bg-black w-full m-auto text-white rounded-full shadow-md hover:bg-blue-700 border-[1px] border-gray-900 py-2 text-center' type="submit">Payer avec Visa</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}