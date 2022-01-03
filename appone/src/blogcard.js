
const Blogcard = (props) => { 

    return (<div className="card-container">
        <img src='../img/coding.jpg' className="card-image"></img>
        <div className="card-content">
            <h4>{props.title}</h4>
            <span>{props.date}</span>
            <p>{props.desc}</p>
            <a href={props.link} target="_blank"><button>Read</button></a>
        </div>

    </div>)
}


export default Blogcard;