import DashboardCardList from "@/components/Dashboard/DashboardCardList/DashboardCardList";
import PriorityChart from "@/components/PriorityChart/PriorityChart";
import DashboardTasks from "@/components/Dashboard/DashboardTasks/DashboardTasks";

import styles from "./DashboardPage.module.scss";

const DashboardPage = () => {
  return (
    <section className={styles.dashboard}>
      <DashboardCardList />
      <PriorityChart />
      <div className={styles.flexContainer}>
        <DashboardTasks />
      </div>
    </section>
  );
};

export default DashboardPage;
