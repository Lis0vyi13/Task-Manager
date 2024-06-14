import DashboardCard from "../DashboardCard/DashboardCard";

import { dashboardCards } from "@/constants";

import styles from "./DashboardCardList.module.scss";

const DashboardCardList = () => {
  return (
    <div className={styles.dashboardList}>
      {dashboardCards.map((card) => (
        <DashboardCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default DashboardCardList;
