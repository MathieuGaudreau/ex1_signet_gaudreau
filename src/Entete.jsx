import './Entete.scss';

export default function Entete(props) {

    return(

        <header className="Entete">

        <div className="logo">Signets</div>
        <ul className="navUtilisateur">
            <li>Mathieu Gaudreau</li>
            <li className="img"></li>
        </ul>

        </header>

    )
}