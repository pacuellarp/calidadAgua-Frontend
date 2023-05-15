import './main.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function Main() {
  return (
      //Un primer paso para el agua limpia en Colombia. 
     //Da el siguiente. Monitorea en línea una fuente hídrica.
    <main className="main">
      <h2 className="description">
        Un primer paso para el agua limpia en Colombia. <br></br>
        Da el siguiente. Monitorea en línea una fuente hídrica.
      </h2>
      <div className="logo"></div>
    </main>
  );
  }

export default Main;
