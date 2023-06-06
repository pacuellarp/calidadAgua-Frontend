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