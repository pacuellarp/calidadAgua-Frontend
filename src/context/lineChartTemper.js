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
  const [temper2, setTemper2] = useState([]);
  const [dias2, setDias2] = useState([]);
  const [dias, setDias] = useState([]);
  const [temper, setTemper] = useState([]);

  useEffect(() => {
    setData(dataResources);

    setInterval(() => {
        window.location.reload()}, 420000);

    var temperData = []
    dataResources?.map((fuente) => {
      for (const element of fuente.valoracion.temperature){
        temperData.push(element)
      }
    });
    setTemper(temperData);

    var diasData = []
    dataResources?.map((fuente) => {
        for (const element of fuente.date){
          diasData.push(element)
        }
    });
    setDias(diasData);

    var cantidad = temperData.length;
    var temperDataSlice = temperData.slice(cantidad - 15, cantidad);
    setTemper2(temperDataSlice);

    var cantidad2 = diasData.length;
    var diasDataSlice = diasData.slice(cantidad2 - 15, cantidad2);
    setDias2(diasDataSlice);

  }, [dataResources]);

  function graficas(dias, temper) {
    var midata = {
      labels: dias,
      datasets: [ // Cada una de las líneas del gráfico
        {
          label: 'temperature',
          data: temper,
          tension: 0.5,
          fill : true,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          pointRadius: 5,
          pointBorderColor: 'rgba(255, 99, 132)',
          pointBackgroundColor: 'rgba(255, 99, 132)',
        },
      ],
    };
    return midata;
  }

  function handleButton1Click() {
    var cantidad = temper.length;
    var temperDataSlice = temper.slice(cantidad - 21, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 21, cantidad2);

    setDias2(diasDataSlice);
    setTemper2(temperDataSlice);
  }

  function handleButton2Click() {
    setDias2(dias);
    setTemper2(temper);
  }

  function handleButton3Click() {
    var cantidad = temper.length;
    var temperDataSlice = temper.slice(cantidad - 63, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 63, cantidad2);

    setDias2(diasDataSlice);
    setTemper2(temperDataSlice);
  }

  function handleButton4Click() {
    var cantidad = temper.length;
    var temperDataSlice = temper.slice(cantidad - 140, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 140, cantidad2);

    setDias2(diasDataSlice);
    setTemper2(temperDataSlice);
  }

  function handleButton5Click() {
    var cantidad = temper.length;
    var temperDataSlice = temper.slice(cantidad - 300, cantidad);
    var cantidad2 = dias.length;
    var diasDataSlice = dias.slice(cantidad2 - 300, cantidad2);

    setDias2(diasDataSlice);
    setTemper2(temperDataSlice);
  }

  return (
    <>
      <div className="chartCard">
        <div className="chartBox">
          <Line data={graficas(dias2, temper2)} options={misoptions} />
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