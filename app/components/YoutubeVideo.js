

function Youtube({ video, title }) {
    return (
        <iframe src={`https://youtube.com/embed/${video}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default Youtube