export default function PostEditor(props) {
    return (
        <div className="flex-auto w-full ">
            <div className="h-auto">
                <textarea placeholder="Quel est le titre de votre Projet?" name="title" id='title' cols="30" rows="2" className="w-full h-12 bg-zinc-100 text-xl focus:border-blue-400 outline-none"></textarea>
                <input type="file" name="image" id="image" className="h-20" />
                <textarea placeholder="Décrivez nous votre Projet?" name="description" id='description' cols="30" rows="50" className="w-full xl:h-96 bg-zinc-100 text-xl focus:border-blue-400 outline-none"></textarea>
            </div>
            <button className="btn-primary h-9 w-20">Poster</button>
        </div>
    )
}