import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { tasks } from "@/constants";

import styles from "./Chart.module.scss";

const Chart = () => {
  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  const totalPriority = {
    low: 0,
    normal: 0,
    medium: 0,
    high: 0,
  };

  for (let i = 0; i < tasks.length; i++) {
    totalPriority[tasks[i].priority] += 1;
  }
  const chartData = [
    { name: "Low", total: totalPriority.low },
    { name: "Normal", total: totalPriority.normal },
    { name: "Medium", total: totalPriority.medium },
    { name: "High", total: totalPriority.high },
  ];

  return (
    <ResponsiveContainer className={styles.chart} width={"100%"} height={350}>
      <BarChart width={150} height={40} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
