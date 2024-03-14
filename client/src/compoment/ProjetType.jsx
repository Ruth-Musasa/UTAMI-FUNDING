export default function ProjetTypes(props) {
    return (
        <div className="w-auto h-auto ">
            <div className={` md:w-96 h-64  border-8  border-white rounded-t-lg text-4xl text-white text-center ${props.classe} `}></div>
            <div className={`bg-white md:w-96 h-12 rounded-b-lg text-center text-black text-xl font-black ${props.classe1} `} >{props.type}</div>
        </div>
    )
}