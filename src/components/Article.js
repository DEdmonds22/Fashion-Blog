
function Article({date, title, img, text}) {
    return (
    <div className="article">
        <h3>{date}</h3>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{text}</p>
        <p className="continues">Continues</p>
    </div>
    )
}

export default Article;