const Card = ({ name, flagUrl, region }) => {
    return (
        <div>
            <img src={flagUrl} alt="" srcset="" />
            <h2>{name}</h2>
            <p>{region}</p>
        </div>
    )
}

export default Card