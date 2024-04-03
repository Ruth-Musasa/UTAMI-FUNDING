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


    const MobileMoney = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "apikey": import.meta.env.VITE_CINET_API_KEY,
            "site_id":  import.meta.env.VITE_CINET_SITE_ID,
            "transaction_id": Math.floor(Math.random() * 100000000).toString(), //
            "amount": 100,
            "currency": "CDF",
            "alternative_currency": "",
            "description": " TEST INTEGRATION ",
            "customer_id": "172",
            "customer_name": "KOUADIO",
            "customer_surname": "Francisse",
            "customer_email": "harrissylver@gmail.com",
            "customer_phone_number": "+225004315545",
            "customer_address": "Antananarivo",
            "customer_city": "Antananarivo",
            "customer_country": "CM",
            "customer_state": "CM",
            "customer_zip_code": "065100",
            "notify_url": "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
            "return_url": "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
            "channels": "ALL",
            "metadata": "user1",
            "lang": "FR",
            "invoice_data": {
                "Donnee1": "",
                "Donnee2": "",
                "Donnee3": ""
            }
        });

        var config = {
            method: 'post',
            url: 'https://api-checkout.cinetpay.com/v2/payment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }


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