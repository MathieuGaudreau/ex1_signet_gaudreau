import './ListeSignets.scss';
import tabSignets from './data/signets.json';
import Signets from './Signets';
export default function ListeSignets(props) {

  return (
    <div className="ListeSignets">
      <ul>
        {tabSignets.map(sig => 
         <Signets Signets={props.Signets} key={sig.id} titre={sig.titre} date={sig.date} id={sig.id} />
        )}
      </ul>
    </div>
  );
}