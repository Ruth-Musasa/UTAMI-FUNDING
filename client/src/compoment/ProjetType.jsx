import { Link } from "react-router-dom"

export default function ProjetTypes(props) {
    return (
        <Link to='/Explore'>
            <div className="w-auto h-auto ">
                <div className={`w-full lg:w-72 2xl:w-96 h-64  border-8  border-white rounded-t-lg text-4xl text-white text-center hover:border-4 ${props.classe} `}></div>
                <div className={`bg-white w-full lg:w-72 2xl:w-96 h-12 rounded-b-lg text-center text-black text-xl font-black ${props.classe1} `} >{props.type}</div>
            </div>
        </Link>
    )
}