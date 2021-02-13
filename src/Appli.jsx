import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import PiedDePage from './PiedDePage';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
          <section className="contenuPrincipal">
            <ListeSignets />
          </section>
      < PiedDePage />
      </div>
  );
}
