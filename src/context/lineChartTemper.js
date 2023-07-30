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

    useEffect(() => {
    setData(dataResources)
    }, [dataResources]);
    /*const getData =() => {
    dataResources = useSelector(state => state.tables.table)
    }*/
    setInterval(() => {
        window.location.reload()}, 420000);

    var temper = []
    dataResources?.map((fuente) => {
        for (const element of fuente.valoracion.temperature){
            temper.push(element)
        }
        });
    var dias = []
    dataResources?.map((fuente) => {
        for (const element of fuente.date){
            dias.push(element)
        }
      });
    
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
    
    return <Line data={midata} options={misoptions}/>
}



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
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: 'rgb(0, 0, 0)' },
    },
  },
};

export default function LinesChart() {
  const dataResources = useSelector((state) => state.tables.table);
  const [data, setData] = useState(dataResources);
  const [selectedDate, setSelectedDate] = useState('');
  const [showNewData, setShowNewData] = useState(false);

  const toggleData = () => {
    setShowNewData((prevState) => !prevState);
  };

  useEffect(() => {
    setData(dataResources);
  }, [dataResources]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  setInterval(() => {
    window.location.reload();
  }, 420000);

  var temper = [];
  dataResources?.map((fuente) => {
    for (const element of fuente.valoracion.temperature) {
      temper.push(element);
    }
  });
  var dias = [];
  dataResources?.map((fuente) => {
    for (const element of fuente.date) {
      dias.push(element);
    }
  });

  function graficas(dias, temper) {
    const filteredDias = dias.filter((date) => date === selectedDate);
    const filteredTemper = temper.filter(
      (_, index) => dias[index] === selectedDate
    );

    const midata = {
      labels: filteredDias,
      datasets: [
        {
          label: 'temperature',
          data: filteredTemper,
          tension: 0.5,
          fill: true,
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

  return (
    <>
      <div className="chartMenu">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <button onClick={toggleData}>
            {showNewData ? 'Mostrar Datos Anteriores' : 'Mostrar Nuevos Datos'}
        </button>
      </div>
      <div className="chartCard">
        <div className="chartBox">
          <Line data={graficas(dias, temper)} options={misoptions} />
        </div>
      </div>
    </>
  );
}
*/