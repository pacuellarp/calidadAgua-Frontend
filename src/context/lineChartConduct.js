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
    const [conduct2, setConduct2] = useState([]);
    const [dias2, setDias2] = useState([]);
    const [dias, setDias] = useState([]);
    const [conduct, setConduct] = useState([]);

    useEffect(() => {
        setData(dataResources);
    
        setInterval(() => {
            window.location.reload()}, 420000);

        var conductData = []
        dataResources?.map((fuente) => {
            for (const element of fuente.valoracion.conductivity){
                conductData.push(element)
            }
        });
        setConduct(conductData);
        
        var diasData = []
        dataResources?.map((fuente) => {
            for (const element of fuente.date){
                diasData.push(element)
            }
        });
        setDias(diasData);
    
        var cantidad = conductData.length;
        var conductDataSlice = conductData.slice(cantidad - 15, cantidad);
        setConduct2(conductDataSlice);

        var cantidad2 = diasData.length;
        var diasDataSlice = diasData.slice(cantidad2 - 15, cantidad2);
        setDias2(diasDataSlice);

    }, [dataResources]);
    
    function graficas(dias, conduct) {
        var midata = {
            labels: dias,
            datasets: [ // Cada una de las líneas del gráfico
                {
                    label: 'conductivity',
                    data: conduct,
                    tension: 0.5,
                    fill : true,
                    borderColor: 'rgb(232, 232, 12)',
                    backgroundColor: 'rgba(232, 232, 12, 0.5)',
                    pointRadius: 5,
                    pointBorderColor: 'rgba(232, 232, 12)',
                    pointBackgroundColor: 'rgba(232, 232, 12)',
                },
            ],
        };
        return midata;
    }
    
    function handleButton1Click() {
        var cantidad = conduct.length;
        var conductDataSlice = conduct.slice(cantidad - 21, cantidad);
        var cantidad2 = dias.length;
        var diasDataSlice = dias.slice(cantidad2 - 21, cantidad2);
    
        setDias2(diasDataSlice);
        setConduct2(conductDataSlice);
    }
    
    function handleButton2Click() {
        setDias2(dias);
        setConduct2(conduct);
    }
    
    function handleButton3Click() {
        var cantidad = conduct.length;
        var conductDataSlice = conduct.slice(cantidad - 63, cantidad);
        var cantidad2 = dias.length;
        var diasDataSlice = dias.slice(cantidad2 - 63, cantidad2);
    
        setDias2(diasDataSlice);
        setConduct2(conductDataSlice);
    }
    
    function handleButton4Click() {
        var cantidad = conduct.length;
        var conductDataSlice = conduct.slice(cantidad - 140, cantidad);
        var cantidad2 = dias.length;
        var diasDataSlice = dias.slice(cantidad2 - 140, cantidad2);
    
        setDias2(diasDataSlice);
        setConduct2(conductDataSlice);
    }
    
    function handleButton5Click() {
        var cantidad = conduct.length;
        var conductDataSlice = conduct.slice(cantidad - 300, cantidad);
        var cantidad2 = dias.length;
        var diasDataSlice = dias.slice(cantidad2 - 300, cantidad2);
    
        setDias2(diasDataSlice);
        setConduct2(conductDataSlice);
    }
    
    return (
        <>
          <div className="chartCard">
            <div className="chartBox">
              <Line data={graficas(dias2, conduct2)} options={misoptions} />
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