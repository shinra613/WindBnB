import StarIcon from '@material-ui/icons/Star';

const CardGenerator = (props) => {
    return (
        <div className="card">
            <img className="card-image" src={props.image}></img>
            <div className="card-header">
                <span className='CardGenSpanOne'>{props.type}.{props.beds} beds</span>
                <div className='CardGenSpanTwo'><span><StarIcon  sx={{ color: "pink" }} /></span> <p>{props.rating}</p></div>
                
            </div>
            <div  className="card-title">{props.title}</div>
           
        </div>
    );
}

export default CardGenerator; 