import { useMemo } from "react";
import { useSelector } from "react-redux";
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

import CustomTooltip from "./CustomTooltip";

import { tasks } from "@/constants";

import styles from "./Chart.module.scss";

const Chart = () => {
  const { theme } = useSelector((state) => state.page);
  const totalPriority = useMemo(() => {
    return tasks.reduce(
      (acc, task) => {
        acc[task.priority] += 1;
        return acc;
      },
      { low: 0, normal: 0, medium: 0, high: 0 },
    );
  }, []);

  const chartData = useMemo(
    () => [
      { name: "Low", Amount: totalPriority.low },
      { name: "Normal", Amount: totalPriority.normal },
      { name: "Medium", Amount: totalPriority.medium },
      { name: "High", Amount: totalPriority.high },
    ],
    [totalPriority],
  );

  const hoverColor = useMemo(
    () => (theme === "light" ? "#d8d8d8" : "#484848"),
    [theme],
  );
  return (
    <ResponsiveContainer className={styles.chart} width={"100%"} height={350}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{ fill: hoverColor }} content={<CustomTooltip />} />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
