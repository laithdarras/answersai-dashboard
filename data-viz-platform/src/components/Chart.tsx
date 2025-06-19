import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 15000, 10000, 18000, 14000, 19000],
      borderColor: "#4ade80",
      backgroundColor: "rgba(74, 222, 128, 0.1)",
      borderWidth: 2,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#ffffff",
        font: {
          size: 12,
        },
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#ffffff",
        font: {
          size: 12,
        },
        callback: function (value: any) {
          return `$${Number(value).toLocaleString()}`;
        },
      },
      border: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

export function Chart() {
  return (
    <div style={{ height: "250px" }}>
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#ffffff",
          margin: "0 0 1rem 0",
          textAlign: "center",
        }}
      >
        Monthly Revenue Trend
      </h3>
      <Line data={data} options={options} />
    </div>
  );
}
