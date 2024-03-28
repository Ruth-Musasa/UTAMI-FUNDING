import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProphilUser } from "../App";

export default function ConnexionButton() {
    const user = useContext(ProphilUser);
    if (user === null) {
        return (
            <Link to='/signin'>
                <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-28 md:w-36 md:h-12 left-5 hover:bg-[#3563FF]">Commencer</button>
            </Link>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}