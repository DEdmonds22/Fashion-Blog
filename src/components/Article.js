
function Article({date, title, img, text}) {
    return (
    <article>
        <h3>{date}</h3>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{text}</p>
        <a href="#" className="continues">Continues ...</a>
    </article>
    )
}

export default Article;