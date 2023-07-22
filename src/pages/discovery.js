import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContextTable from '../context/resourcesTable';
import LineChartPH from '../context/lineChartPH';
import LineChartTemper from '../context/lineChartTemper';
import LineChartConduct from '../context/lineChartConduct';
import LineChartLevel from '../context/lineChartLevel';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { blue } from '@mui/material/colors';

function Discovery() {
  return (
    <>
      <Header />
      <div>
          <br></br>
          <br></br>
      </div>
      <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"750px", height:"390px"}}>
          <LineChartPH />
      </div>
      <div>
          <br></br>
          <br></br>
          <br></br>
      </div>
      <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"750px", height:"390px"}}>
          <LineChartTemper />
      </div>
      <div>
          <br></br>
          <br></br>
          <br></br>
      </div>
      <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"750px", height:"390px"}}>
          <LineChartConduct />
      </div>
      <div>
          <br></br>
          <br></br>
          <br></br>
      </div>
      <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"750px", height:"390px"}}>
          <LineChartLevel />
      </div>
      <div>
          <br></br>
          <br></br>
          <br></br>
      </div>
      <ContextTable />
      <div>
          <br></br>
          <br></br>
      </div>
    </>
  );
}

export default Discovery;
