import './registroH.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function RegistroH(){
    return(
        <div className="registroH">
            <div className="registroHText">
                <h2>Tecnología IoT al Servicio de las Comunidades</h2>
                <p>
                Teniendo en cuenta la crisis del agua en Colombia y el sexto objetivo de desarrollo sostenible, nace la idea de crear una herramienta de bajo costo que utiliza internet de las cosas para la medición, gestión y control de la calidad del agua en tiempo real
                </p> 
            </div>
            <div className="registroHButton">
                <Link to="/discovery">
                <Button variant="primary" size="m">
                    Ir allá
                </Button>
                </Link>
            </div>
      </div>
    )
};

export default RegistroH;