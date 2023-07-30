import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var misoptions = {
  scales: {
    y: {
      min: 0
    },
    x: {
      ticks: { color: 'rgb(0, 0, 0)' }
    }
  }
};

export default function LinesChart() {
  const dataResources = useSelector(state => state.tables.table);
  const [data, setData] = useState(dataResources);
  const [ph2, setPh2] = useState([]);
  const [dias2, setDias2] = useState([]);
  const [dias, setDias] = useState([]);
  const [ph, setPh] = useState([]);

  useEffect(() => {
    setData(dataResources);

    var phData = [];
    dataResources?.map((fuente) => {
      for (const element of fuente.valoracion.pH) {
        phData.push(element);
      }
    });
    setPh(phData);

    var diasData = [];
    dataResources?.map((fuente) => {
      for (const element of fuente.date) {
        diasData.push(element);
      }
    });
    setDias(diasData);

    var cantidad = phData.length;
    var phDataSlice = phData.slice(cantidad - 15, cantidad);
    setPh2(phDataSlice);

    var cantidad2 = diasData.length;
    var diasDataSlice = diasData.slice(cantidad2 - 15, cantidad2);
    setDias2(diasDataSlice);

  }, [dataResources]);

  function graficas(dias, ph) {
    var midata = {
      labels: dias,
      datasets: [
        {
          label: 'pH',
          data: ph,
          tension: 0.5,
          fill: true,
          borderColor: 'rgb(90, 200, 110)',
          backgroundColor: 'rgba(90, 200, 110, 0.5)',
          pointRadius: 5,
          pointBorderColor: 'rgba(90, 200, 110)',
          pointBackgroundColor: 'rgba(90, 200, 110)',
        },
      ],
    };
    return midata;
  }

  function handleButton1Click() {
    var cantidad = ph.length;
    var phDataSlice = ph.slice(cantidad - 21, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 21, cantidad2);

    setDias2(diasDataSlice);
    setPh2(phDataSlice);
  }

  function handleButton2Click() {
    setDias2(dias);
    setPh2(ph);
  }

  function handleButton3Click() {
    var cantidad = ph.length;
    var phDataSlice = ph.slice(cantidad - 63, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 63, cantidad2);

    setDias2(diasDataSlice);
    setPh2(phDataSlice);
  }

  function handleButton4Click() {
    var cantidad = ph.length;
    var phDataSlice = ph.slice(cantidad - 140, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 140, cantidad2);

    setDias2(diasDataSlice);
    setPh2(phDataSlice);
  }

  function handleButton5Click() {
    var cantidad = ph.length;
    var phDataSlice = ph.slice(cantidad - 300, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 300, cantidad2);

    setDias2(diasDataSlice);
    setPh2(phDataSlice);
  }

  return (
    <>
      <div className="chartCard">
        <div className="chartBox">
          <Line data={graficas(dias2, ph2)} options={misoptions} />
        </div>
        <button onClick={handleButton1Click}>Last 21 entries</button>
        <button onClick={handleButton3Click}>Last 63 </button>
        <button onClick={handleButton4Click}>Last 140 </button>
        <button onClick={handleButton5Click}>Last 300 </button>
        <button onClick={handleButton2Click}>All data</button>
      </div>
    </>
  );
}






/*
    return (
        <>
          <div class="chartMenu">
            <button onClick={toggleData}>
              {showNewData ? 'Mostrar Datos Anteriores' : 'Mostrar Nuevos Datos'}
            </button>
          </div>
          <div class="chartCard">
            <div class="chartBox">
              <canvas id="myChart"></canvas>
              <input type="Date" />
            </div>
          </div>
          <Line data={graficas(dias2, ph2)} options={misoptions} />
        </>
      );
    }
*/



/*
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(0, 0, 0)'}
        }
    }
};

export default function LinesChart() {
    const dataResources = useSelector(state => state.tables.table);
    const [data, setData] = useState(dataResources);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [showNewData, setShowNewData] = useState(false);

    const handleMonthChange = (event) => {
      setSelectedMonth(event.target.value);
    };
    const toggleData = () => {
      setShowNewData((prevState) => !prevState);
    };

    useEffect(() => {
    setData(dataResources)
    }, [dataResources]);
    
    /*const getData =() => {
    dataResources = useSelector(state => state.tables.table)
    }*/
    /*setInterval(() => {
      window.location.reload()}, 420000);

  var ph = []
  dataResources?.map((fuente) => {
    for (const element of fuente.valoracion.pH){
        ph.push(element)
    }
  });
  
  var dias = []
  dataResources?.map((fuente) => {
    for (const element of fuente.date){
        dias.push(element)
    }
  });
  
  var ph2 = [];
  var cantidad = ph.length;

  for (var i = cantidad - 15; i < cantidad; i++) {
    // Accede al elemento del arreglo usando el índice actual y haz lo que necesites con él
    ph2.push(ph[i]);
    console.log(ph[i]);
  }

  var dias2 = [];
  var cantidad2 = dias.length;

  for (var j = cantidad2 - 15; j < cantidad2; j++) {
    // Accede al elemento del arreglo usando el índice actual y haz lo que necesites con él
    dias2.push(dias[j]);
  }

  function graficas(dias, ph) {
    /*var filteredData = dataResources?.filter(
      (fuente) =>
        new Date(fuente.date).toISOString().slice(0, 7) === selectedMonth
    );*/

    /*var ph = [];
    var dias = [];*/

    /*filteredData?.forEach((fuente) => {
      fuente.valoracion.pH.forEach((element) => {
        ph.push(element);
      });
      dias.push(fuente.date);
    });*/

   /* var midata = {
      labels: dias,
      datasets: [ // Cada una de las líneas del gráfico
        {
          label: 'pH',
          data: ph,
          tension: 0.5,
          fill : true,
          borderColor: 'rgb(90, 200, 110)',
          backgroundColor: 'rgba(90, 200, 110, 0.5)',
          pointRadius: 5,
          pointBorderColor: 'rgba(90, 200, 110)',
          pointBackgroundColor: 'rgba(90, 200, 110)',
        },
      ],
    };  
    return midata
  }

  return (
    <>
      <div className="chartMenu">
        <input
          type="month"
          value={selectedMonth}
          onChange={handleMonthChange}
        />
        <button onClick={toggleData}>
          {showNewData ? 'Mostrar Datos Anteriores' : 'Mostrar Nuevos Datos'}
        </button>
      </div>
      <div className="chartCard">
        <div className="chartBox">
          <Line data={graficas(dias2, ph2)} options={misoptions} />
        </div>
      </div>
    </>
  );
}

/*
  return (
      <>
        <div class="chartMenu">
          <button onClick={toggleData}>
            {showNewData ? 'Mostrar Datos Anteriores' : 'Mostrar Nuevos Datos'}
          </button>
        </div>
        <div class="chartCard">
          <div class="chartBox">
            <canvas id="myChart"></canvas>
            <input type="Date" />
          </div>
        </div>
        <Line data={graficas(dias2, ph2)} options={misoptions} />
      </>
    );
  }
*/

