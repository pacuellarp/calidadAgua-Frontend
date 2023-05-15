import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import RegistroH from '../components/registroH/registroH';
import Visualizacion from '../components/visualizacion/visualizacion';
import Mapa from '../components/mapa/mapa';
import "./map.css";


function Map() {
  return (
    <>
      <Header />
      <h1 class="titleMap">Sistema Nacional de Monitoreo En Tiempo Real de la Calidad del Agua</h1>
      <div class="mainMap">
        <div class="infoMap">
          <RegistroH />
          <Visualizacion/>
        </div>
        <Mapa/>
      </div>
      <Footer />
    </>
  );
}

export default Map;