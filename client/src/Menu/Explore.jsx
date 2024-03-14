import ProjetTypes from "../compoment/ProjetType";
import Option from "../compoment/Option";

export default function Explore() {
    return (
        <div className="md:w-10/12 m-auto h-auto py-20 ">
            <div className="flex gap-6 pb-10">
                <div className="bg-zinc-200 h-11 rounded-full p-2 flex gap-6 justify-center pl-6 w-11/12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path className="fill-zinc-500" d="M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z" fill="#D9D9D9" />
                    </svg>
                    <input type="search" name="search" id="search" className='bg-zinc-200 outline-none w-full' placeholder='Serach Twitter' />
                </div>
                <div className="text-xl w-1/12 text-center border">z</div>
            </div>
            <div className=" w-full m-auto">
                <div className="flex h-auto overflow-x-scroll gap-6 md:gap-12">
                    <ProjetTypes type="Projet architectural" classe="bg-cover bg-[url('client/src/assets/8be8502369c21819b8bb0ad6a8b0afad.jpg')] lg:h-96 lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                    <ProjetTypes type="Projet agricole" classe="bg-[url('client/src/assets/bd5c4f3b2249a310be4dcf50644cbefe.jpg')] lg:h-96 lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                    <ProjetTypes type="Projet gastronomique" classe="bg-[url('client/src/assets/c53b881e891566634ff68349842b5d7c.jpg')] lg:h-96 lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                    <ProjetTypes type="Projet modelisme" classe="bg-[url('client/src/assets/a80f7343138d26af55ddc65c8ed70383.jpg')] lg:h-96 lg:w-[500px] border-[#F3F3F3] " classe1="lg:w-[500px] bg-[#F3F3F3]" />
                </div>
                <div className="py-6 lg:py-10">
                    <h3 className=" text-2xl mt-11 mb-7  md:text-6xl">Projets reçents</h3>
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                    <Option title="Avoir l'audace d'entreprendre" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, a at, illo assumenda adipisci accusamus eligendi iste quo deserunt deleniti aliquid cum dignissimos dolor. Repudiandae assumenda cum maxime atque! Unde?" classe="bg-[url('client/src/assets/pexels-rocketmann-team-9486890.jpg')]" link="" time='12/02/2025' contrib='1.000$' />
                </div>
            </div>
        </div>
    )

}