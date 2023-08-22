import { useState } from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () =>{
    const [pieChartData, setPieChartData] = useState({
        labels: ['Clothes', 'Food', 'Pharmacy'],
        datasets: [
          {
            data: [30, 65, 5],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      });
    return  <Pie data={pieChartData}/>
}