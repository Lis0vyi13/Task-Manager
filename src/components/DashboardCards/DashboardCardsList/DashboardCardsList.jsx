import DashboardCard from "../DashboardCard/DashboardCard";

import { dashboardCards } from "@/constants";

import styles from "./DashboardCardsList.module.scss";

const DashboardCardsList = () => {
  return (
    <div className={styles.dashboardList}>
      {dashboardCards.map((card) => (
        <DashboardCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default DashboardCardsList;
