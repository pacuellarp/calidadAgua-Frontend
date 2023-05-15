import './visualizacion.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function Visualizacion(){
    return(
        <div className="visualizacion">
        <div className="visualizacionText">
            <h2>Visualización Cartográfica por Variable</h2>
            <p>
            Lo que es más, podrás consultar información hídrica departamental y municipal, organizada de manera cartográfica por cada variable, PH, temperatura, conductividad eléctrica, turbidez y profundidad. ¿Ya tienes una cuenta?   
            </p> 
        </div>
        <div className="visualizacionButton">
            <Link to="/login">
            <Button variant="primary" size="m">
                Iniciar sesión
            </Button>
            </Link>
        </div>
  </div>
    )
};

export default Visualizacion;