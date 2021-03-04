import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, img, age, country, role, salary } = props.player;
    return (
        <div className="player d-flex">
            <div className="player-photos">
                <img src={img} alt="" />
            </div>
            <div className="player-info pl-4">
                <h4>{name}</h4>
                <h5><small> Age: {age} </small></h5>
                <h5><small>Role: {role}</small></h5>                
                <h5><small>Salary: {salary}</small></h5>                
                <h5><small><b>Country: {country}</b> </small></h5>
                <button onClick={() => props.handleAdded(props.player)} className="btn btn-primary" >  <b> <FontAwesomeIcon icon={faUser} /> Add To Team</b> </button>
            </div>
        </div>
    );
};

export default Player;