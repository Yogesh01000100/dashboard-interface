import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export const PieChart: React.FC = () => {
  const [chartData, setChartData] = useState<PieChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const labels = ["store", "online", "returns"];
      const data = [12, 19, 7];

      setChartData({
        labels,
        datasets: [
          {
            label: "Color Distribution",
            data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: { size: 12 },
          color: "#333",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-xl border border-cyan-300 my-5 w-80 h-80">
      <Pie data={chartData} options={options} />
    </div>
  );
};
