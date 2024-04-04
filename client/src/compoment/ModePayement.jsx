import { useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import ContributionForm from "./Contribution";
import axios from "axios";

export default function ModePayement(props) {
    const [montant, setmontant] = useState('');
    const [montantPay, setMontantPay] = useState(0);
    const { id } = useParams();
console.log(id,);
    const handleMobile = () => {
        var data = JSON.stringify({
            "apikey": import.meta.env.VITE_CINET_API_KEY,
            "site_id": import.meta.env.VITE_CINET_SITE_ID,
            "transaction_id": Math.floor(Math.random() * 100000000).toString(),
            "amount": parseInt(montantPay),
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
            "notify_url": "http://localhost:5173/Explore",
            "return_url": "http://localhost:5173/Explore",
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
                console.log(JSON.stringify(response.data.data.payment_url), 'resp data');
                window.open(response.data.data.payment_url, '_blank')
            })
            .catch(function (error) {
                console.log(error);
            });
        handleSubmit(montantPay)
    }
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post(`http://localhost:5000/contribution/payment${props.id} `, {amount : data} );
            console.log(response.status, 'response.status');
        } catch (error) {
            console.error('Erreur de connexion:', error);
        }
    };

    return (
        <div className=''>
            <div className='lg:flex w-10/12 m-auto h-svh'>
                <div className="bg-center w-1/2 bg-no-repeat bg-[url('client/src/assets/360_F_533133531_vLjr8NTAqZm6nQZ6VX27WIUvPhhrT847.jpg')] "></div>
                <div className='py-40 m-auto w-1/2  lg:w-1/3 grid gap-6'>
                    <h2 className='text-5xl w-full text-center font-black'>Quel montent souhaitez vous payer ?</h2>
                    <div>
                        <label className='md:text-2xl font-black'>Montant a payer </label>
                        <input className='w-full text-black border px-6 py-2  border-2 rounded-xl' type="number" value={montantPay} onChange={(e) => setmontant(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-6 pb-6">
                        <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl hover:bg-[#C5EAE2]" onClick={() => setMontantPay(50)}>50$</button>
                        <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl hover:bg-[#C5EAE2]" onClick={() => setMontantPay(100)}>100$</button>
                        <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl hover:bg-[#C5EAE2]" onClick={() => setMontantPay(200)}>200$</button>
                        <button className="border-2 border-black text-black p-2 rounded-xl text-center text-xl hover:bg-[#C5EAE2]" onClick={() => setMontantPay(500)}>500$</button>
                    </div>
                    <div className="grid gap-2">
                        <button type="button" onClick={handleMobile} className='text-2xl font black bg-black w-full m-auto text-white rounded-full shadow-md hover:bg-blue-400 border-[1px] border-gray-900 py-2 text-center'>Payer avec mobile money</button>
                        <Link to='/Visa'><button className='text-2xl font black bg-black w-full m-auto text-white rounded-full shadow-md hover:bg-blue-400 border-[1px] border-gray-900 py-2 text-center' type="submit">Payer avec Visa</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}