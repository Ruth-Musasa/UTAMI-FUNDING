import React, { useState } from 'react';
import axios from 'axios';
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";

export default function ContributionForm() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        try {
            const response = await axios.post('/api/payment', {
                cardNumber,
                expiryDate,
                cvv
            });
            console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la soumission du paiement :', error);
            setIsLoading(false);
            setErrorMessage('Une erreur s\'est produite lors du traitement de votre paiement. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div className='bg-[#A7D6D0] '>
            <div className='lg:flex w-10/12 m-auto h-svh'>
                {/* <div className="bg-center w-1/2 bg-no-repeat bg-[url('https://www.woli.io/wp-content/uploads/2023/09/woli-homepage-mobile-VISA.jpg')] "></div> */}
                <div className='py-40 m-auto w-1/2  lg:w-1/3 grid gap-6'>
                    {/* <h2 className='text-5xl w-full text-center font-black'>Formulaire de Paiement</h2>
                    <form onSubmit={handleSubmit} className='grid gap-4'>
                        <div>
                            <label className='text-xl '>Numéro de Carte :</label>
                            <input className='w-full text-black border px-6 py-2  border-2' type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                        </div>
                        <div>
                            <label className='text-xl '>Date d'expiration :</label>
                            <input className='w-full text-black border px-6 py-2' type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" required />
                        </div>
                        <div>
                            <label className='text-xl '>CVV :</label>
                            <input className='w-full text-black border px-6 py-2' type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                        </div>
                        {isLoading ? (
                            <p>En cours de traitement...</p>
                        ) : (
                            <button className='bg-black w-1/2 m-auto text-white rounded-full shadow-md hover:bg-blue-700 border-[1px] border-gray-900 py-2 text-center' type="submit">Payer</button>
                        )}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </form> */}
                    <VisaCard submitBtnTxt="Pay $350" onSubmit={() => {
                        alert('hello')
                    }} />
                    {isLoading ? (
                        <p>En cours de traitement...</p>
                    ) : (
                        <button className='bg-black w-1/2 m-auto text-white rounded-full shadow-md hover:bg-blue-700 border-[1px] border-gray-900 py-2 text-center' type="submit">Payer</button>
                    )}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}


