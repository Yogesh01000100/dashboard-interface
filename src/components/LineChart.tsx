import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
    tension: number;
  }[];
}

const generateData = (
  initial: number,
  count: number,
  volatility: number
): number[] => {
  const data: number[] = [];
  let value = initial;
  for (let i = 0; i < count; i++) {
    value += Math.random() * (volatility * 2) - volatility;
    value = Math.max(10, value);
    data.push(Math.round(value));
  }
  return data;
};

export const LineChart: React.FC = () => {
  const [chartData, setChartData] = useState<LineChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const count = 7;
    const labels = Array.from({ length: count }, (_, i) => `Month ${i + 1}`);

    const onlineSales = generateData(100, count, 20);
    const storeSales = generateData(80, count, 18);
    const wholesaleSales = generateData(200, count, 30);
    const returns = generateData(15, count, 10);

    setChartData({
      labels,
      datasets: [
        {
          label: "Online Sales",
          data: onlineSales,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          tension: 0.4,
        },
        {
          label: "Store Sales",
          data: storeSales,
          fill: false,
          backgroundColor: "rgba(255,99,132,0.4)",
          borderColor: "rgba(255,99,132,1)",
          tension: 0.4,
        },
        {
          label: "Wholesale Sales",
          data: wholesaleSales,
          fill: false,
          backgroundColor: "rgba(54,162,235,0.4)",
          borderColor: "rgba(54,162,235,1)",
          tension: 0.4,
        },
        {
          label: "Returns",
          data: returns,
          fill: false,
          backgroundColor: "rgba(255,206,86,0.4)",
          borderColor: "rgba(255,206,86,1)",
          tension: 0.4,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 12,
          },
          color: "#333",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#666" } },
      y: { grid: { display: false }, ticks: { color: "#666" } },
    },
  };

  return (
    <div className="m-5 py-4 px-3 bg-white shadow-md hidden md:block rounded-xl border border-cyan-300 w-[600px]">
      <Line data={chartData} options={options} />
    </div>
  );
};
