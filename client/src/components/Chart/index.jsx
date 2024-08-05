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

import styles from "./Chart.module.scss";

const Chart = () => {
  const dashboardStats = useSelector((store) => store.tasks?.dashboardStats);
  const graphData = dashboardStats.graphData;
  const { theme } = useSelector((state) => state.page);
  const hoverColor = useMemo(() => (theme === "light" ? "#d8d8d8" : "#484848"), [theme]);

  return (
    <ResponsiveContainer className={styles.chart} width={"100%"} height={350}>
      <BarChart data={graphData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{ fill: hoverColor }} content={<CustomTooltip />} />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Total" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
