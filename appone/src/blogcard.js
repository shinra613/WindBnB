
const Blogcard = (props) => { 

    return (<div className="card-container">
        <div className="card-background"></div>
        <div className="card-content">
            <h4>{props.title}</h4>
            <span>{props.date}</span>
            <p>{props.desc}</p>
            <a href={props.link} target="_blank"><button>Contine Reading</button></a>
        </div>

    </div>)
}


export default Blogcard;