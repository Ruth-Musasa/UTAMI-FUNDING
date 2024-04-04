import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projets({ data }) {
    const [comment, setComment] = useState([]);
    const [contrib, setContrib] = useState([]);
    let count = 0

    useEffect(() => {
        const dataJson = `http://localhost:5000/comment/projet/${data.id_post}`
        axios.get(dataJson)
            .then(res => {
                setComment(res.data)
            })
    }, [])
    useEffect(() => {
        const dataJson = `http://localhost:5000/contribution/payment/${data.id_post}`
        axios.get(dataJson)
            .then(res => {
                setContrib(res.data)
                console.log(res.data, 'rtyy');
            })
    }, [])

    const formatDate = dateString => {
        const creationDate = new Date(dateString);
        const year = creationDate.getFullYear();
        const month = String(creationDate.getMonth() + 1).padStart(2, '0');
        const day = String(creationDate.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };

    const dateEnd = formatDate(data.end_date);
    const dateStart = formatDate(data.start_date);

    return (
        <div className='lg:flex lg:gap-10 p-10 w-11/12 m-auto border m-10 rounded-3xl'>
            <div className='bg-black h-72 lg:w-1/2 rounded-3xl' style={{ backgroundImage: `url(${import.meta.env.VITE_SERVER_URL}${data.photo})` }}>
                <div className={`h-72 w-full bg-no-repeat  bg-center rounded-3xl`} style={{
                    backgroundImage: `url(${import.meta.env.VITE_SERVER_URL}${data.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
            </div>
            <div className='md:w-2/3 grid md:gap-10'>
                <div className='grid'>
                    <strong> <h3 className="text-2xl md:text-4xl "> {data.categorie}: {data.title} </h3></strong>
                    {data.creator ? <strong className="text-xl md:text-2xl text-gray-600"> Créateur(trice): {data.creator?.name} </strong> : null}
                </div>
                <div>
                    <div className='flex justify-between flex-wrap'>
                        <div className='flex gap-x-2 items-center' >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-auto self-center fill-black"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                            <p> {dateStart} /{dateEnd} </p>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-auto self-center fill-black"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" /></svg>
                            <p> {comment.length} </p>
                        </div>
                        <div>
                            {contrib.length > 0 ?
                                contrib.map((amount) => {
                                    count += amount.amount
                                }) : null
                            }
                            <div className='flex gap-x-2 items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-auto self-center fill-black"><path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 84c-11 0-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104c0-11-9-20-20-20zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z" /></svg>
                                <p className="">{count} $/{data.desired_amount} $</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-stretch underline underline-offset-8 mb-12 hover:text-[#3563FF]  ">
                        <div className='items-center flex'>
                            <Link to={`/detail/${data.id_post}`}> <button className='text-xl font-black text-black rounded-xl  py-2 underline underline-offset-0 decoration-8  hover:text-[#FFC801] decoration-[#FFC801]' >Voir les détails</button></Link >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}