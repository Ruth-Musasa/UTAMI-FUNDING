export default function DetailPost(props) {
    return (
        <div className="lg:w-10/12 grid grid-cols-2">
            <div className="w-3/2">
                <h2>{props.title} </h2>
                <img src="" alt="" />
                <p>{props.detail} </p>
            </div>
            <div className="w-3/2"></div>
        </div>
    )
}