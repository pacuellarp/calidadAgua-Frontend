import './crisis.css';
import Button from '../button/button';
import { Link } from 'react-router-dom';

function Crisis() {
  return (
    <div className="crisisContent">
      <h1 id="crisisTitle">Crisis de Agua en Colombia</h1>
      <h3 id="crisisSubTitle">El Estudio Nacional del Agua 2018 evidencia un manejo inadecuado</h3>
      <div className="subInfoPills">
        <div className="infoPill">
          <p>
          En Colombia el cuidado que se da a los recursos hídricos es bajo comparado con otros países que tienen controles estrictos y supervisados de las características físicas y fisicoquímicas del agua.
          </p>
        </div>
        <div className="infoPill">
          <p>
          Los informes cuatrienales del IDEAM representan un problema en el seguimiento de las características y en la correcta aplicación de las normas colombianas que regulan los vertimientos y el correcto uso del recurso hídrico.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crisis;
