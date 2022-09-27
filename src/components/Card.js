import "./Card.css"

function Card({name, status, image}) {
    return (
        <article className={status === "Alive" ? "card alive" : status === "card Dead" ? "dead" : "card unknown"}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </article>
    )
}

export default Card;