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
import "./discovery.css";

function Discovery() {
  return (
    <>
        <div id="discovery">
            <Header />
            <div>
                <br></br>
                <br></br>
            </div>
            <div id="graphic" className="bg-light mx-auto px-2 border border-2 border-primary" >
                <LineChartPH />
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div id="graphic" className="bg-light mx-auto px-2 border border-2 border-primary" >
                <LineChartTemper />
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div id="graphic" className="bg-light mx-auto px-2 border border-2 border-primary" >
                <LineChartConduct />
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div id="graphic" className="bg-light mx-auto px-2 border border-2 border-primary" >
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
        </div>
    </>
  );
}

export default Discovery;
