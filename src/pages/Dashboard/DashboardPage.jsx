import StatsCardsList from "@/components/Stats/StatsCardsList/StatsCardsList";
import PriorityChart from "@/components/PriorityChart/PriorityChart";
import DashboardTasks from "@/components/DashboardTasks/DashboardTasks";
import Developers from "@/components/Developers/Developers";

import styles from "./DashboardPage.module.scss";

const DashboardPage = () => {
  return (
    <section className={styles.dashboard}>
      <StatsCardsList />
      <PriorityChart />
      <div className={styles.flexContainer}>
        <DashboardTasks />
        <Developers />
      </div>
    </section>
  );
};

export default DashboardPage;
