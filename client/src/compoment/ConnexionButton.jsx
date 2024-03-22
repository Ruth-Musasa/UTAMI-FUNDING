import { useContext } from "react";
import { Link } from "react-router-dom";

export default function ConnexionButton({user}) {
    // const user = useContext(ProphilUser);
    if (user == null) {
        return (
            <Link to='/Connexion'>
                <button className="self-center bg-black rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5 w-36 h-12 left-5 hover:bg-[#3563FF]">Commencer</button>
            </Link>

        )
    }
    else {
        return(
            <div></div>
        )
    }
}