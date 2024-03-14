import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
export default function Option(props) {
    return (
            <div className='lg:flex lg:gap-10 py-6  '>
                <div className={`h-60 md:w-[500px] bg-cover bg-no-repeat ${props.classe} `}></div>
                <div className='w-full '>
                    <strong> <h3 className="text-xl pt-10">{props.title} </h3></strong>
                    <p className="py-4">  {props.description} </p>
                    <div className='flex justify-between border'>
                        <div className='flex gap-6'>
                            <img src="" alt="" />
                            <p>{props.time} </p>
                        </div>
                        <div className='flex gap-6' >
                            <img src="" alt="" />
                            <p>{props.contrib} </p>
                        </div>
                    </div>
                    <div className="flex items-stretch underline underline-offset-8 mb-12 hover:text-[#3563FF] ">
                        <a href={props.link}>Commencer la formation</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </div>
            </div>
    )
}