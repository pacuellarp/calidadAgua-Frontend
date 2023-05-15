import './tecIOT.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function TecIOT() {
  return (
    <div className="tecIOT">
      <div className="tecIOT-column1"></div>
      <div className="tecIOT-column2">
        <div className="tecIOT-text">
          <h2>Tecnología IoT al Servicio de las Comunidades</h2>
          <h3>Un Sistema de Monitoreo En Línea de la Calidad del Agua</h3>
          <p>
          Teniendo en cuenta la crisis del agua en Colombia y el sexto objetivo de desarrollo sostenible, nace la idea de crear una herramienta de bajo costo que utiliza internet de las cosas para la medición, gestión y control de la calidad del agua en tiempo real
          </p> 
        </div>
        <div className="tecIOT-button">
          <Link to="/">
            <Button variant="primary" size="m">
               Saber más
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TecIOT;
