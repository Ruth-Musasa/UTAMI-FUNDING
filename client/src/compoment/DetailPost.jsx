export default function DetailPost({data}) {
    console.log(data);
    // return (
    //     <div className="pt-20 w-10/12 m-auto lg:flex gap-10">
    //         <div className="lg:w-9/12">
    //             <h2 className="text-5xl pb-7  md:text-6xl "> projet x {data.title} </h2>
    //             <img src={data.image} className="w-full h-96 border" alt="" />
    //             <p className="pt-6">{data.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut magni dignissimos in sit, culpa, vel vero architecto perspiciatis rem eaque placeat aperiam excepturi reprehenderit porro magnam omnis dolorum dolores? </p>
    //             <div className="flex justify-between ">
    //                 <div className='pt-10 pb-4 flex gap-2'>
    //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-auto self-center fill-black"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
    //                     <p>{data.time} 12/02/2025 </p>
    //                 </div>
    //                 <div className='pt-10 pb-4 flex gap-2 ' >
    //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-auto self-center fill-black"><path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3c-.3-.1-.5-.2-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 84c-11 0-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104c0-11-9-20-20-20zM48 352H64c19.5 25.9 44 47.7 72.2 64H64v32H256 448V416H375.8c28.2-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V400c0-26.5 21.5-48 48-48z" /></svg>
    //                     <p>{data.contrib} 100000 $ </p>
    //                 </div>
    //             </div>
    //             <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 hover:bg-[#3563FF]">Contribuer</button>
    //         </div>
    //         <div className="lg:w-3/12 border">
    //             <h4 className="text-center text-3xl py-6 ">Profil du Créateur(trice)</h4>
    //             <div className="w-10/12 h-96 rounded-full border m-auto">
    //                 <img className='h-auto' src="" alt="" />
    //             </div>
    //             <div className='lg:w-10/12 m-auto'>
    //                 <h5 className='text-xl md:text-2xl font-black pt-4'>{data.name} Ruth Musasa </h5>
    //                 <span className="text-lg text-zinc-500 lg:text-xl font-black "> @ {data.user_name} R_Muss</span>
    //                 <div className="border-b pt-10 "></div>
    //             </div>
    //         </div>
    //     </div>

    // )
}