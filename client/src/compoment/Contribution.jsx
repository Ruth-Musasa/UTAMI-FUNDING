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
                <div className='py-40 m-auto w-1/2  lg:w-1/3 grid gap-6'>
                    <VisaCard submitBtnTxt="Pay $350" onSubmit={() => {
                    }} />
                    {isLoading ? (
                        <p>En cours de traitement...</p>
                    ) : null}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}


