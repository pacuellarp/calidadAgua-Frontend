import './fin.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function Fin() {
  return (
    <div className="fin">
      <div className="fin-column1">
        <div className="fin-text">
          <h2>¿Cuál es Nuestro Fin?</h2>
          <h3>Implementar el proyecto conjuntamente con comunidades interesadas</h3>
          <p>
          Un programa pedagógico en el marco de ingenierías comprometidas, buscando co-construir junto a las comunidades circundantes a las fuentes hídricas, a fin de que en la medida de pertinencia, se empoderen de estas tecnologías para ejercer un apoyo en el bienestar de la hidrología y la salud en el país
          </p> 
        </div>
        <div className="fin-button">
          <Link to="/">
            <Button variant="primary" size="m">
              Saber más
            </Button>
          </Link>
        </div>
      </div>
      <div className="fin-column2"></div>
    </div>
  );
}

export default Fin;
