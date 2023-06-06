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

    var conduct = []
    dataResources?.map((fuente) => {
        for (const element of fuente.valoracion.conductivity){
            conduct.push(element)
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
                label: 'conductivity',
                data: conduct,
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(100, 99, 232)',
                backgroundColor: 'rgba(100, 99, 232, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(100, 99, 232)',
                pointBackgroundColor: 'rgba(100, 99, 232)',
            },
        ],
    };
    
    return <Line data={midata} options={misoptions}/>
}