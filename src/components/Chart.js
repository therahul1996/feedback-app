import React, { useState, useEffect } from 'react'
import Loader from "./loader/Loader";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);
const Chart = () => {
  const [isLoading, setIsLoading] = useState(true);
    const feedbacks = useSelector((state) => state.feedbacks);
    const feedbackByMonth = feedbacks.reduce((acc, feedback) => {
        const date = new Date(feedback.date);
        const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
      
        if (!acc[monthYear]) {
          acc[monthYear] = 0;
        }
      
        acc[monthYear] += 1;
      
        return acc;
      }, {});

      const chartData = {
        labels: Object.keys(feedbackByMonth),
        datasets: [
          {
            label: 'Total Feedback',
            data: Object.values(feedbackByMonth),
            backgroundColor: '#a3ffd3',
          },
        ],
      };
      
      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, []);
  return (
    <div className="mainSec">
        
          {isLoading ? <Loader /> : (
            <div className="mainContent">
            <Bar data={chartData} options={chartOptions} />
            </div>
          )}
    </div>
  )
}

export default Chart