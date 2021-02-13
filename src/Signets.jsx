import './Signets.scss';
import MoreVert from '@material-ui/icons/MoreVert';
import Sort from '@material-ui/icons/Sort';

export default function Signets(props) {
    
    return(
        
    <li className="Signets">
        <Sort />
    <img src={'images-signets/' + props.id + '.png'} alt=""/>
    <div className="info">
        <p className="titre">{props.titre}</p>
        <p className="date">{props.date}</p>
        <MoreVert />
    </div>
    
    </li>
    );

}