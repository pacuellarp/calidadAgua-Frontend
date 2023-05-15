import './unete.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function Unete() {
  return (
    <div className="uneteContent">
      <h1 id="uneteTitle">Únete a esta iniciativa</h1>
      <p id="uneteSubTitle">
          Toma el control de nuestros recursos en tus propias manos
      </p>
      <div className="subUneteContent">
        <form>
          <label for="email">
            <input type="text" id="email" name="email" placeholder="Your Email Address"></input>
          </label>
        </form>
        <div className="uneteButton">
        <Link to="/">
            <Button variant="primary" size="m">
               Get started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}



export default Unete;
