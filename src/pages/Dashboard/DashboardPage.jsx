import DashboardCardList from "@/components/DashboardCards/DashboardCardsList/DashboardCardsList";
import PriorityChart from "@/components/PriorityChart/PriorityChart";
import Tasks from "@/components/Tasks/Tasks";
import Developers from "@/components/Developers/Developers";

import styles from "./DashboardPage.module.scss";

const DashboardPage = () => {
  return (
    <section className={styles.dashboard}>
      <DashboardCardList />
      <PriorityChart />
      <div className={styles.flexContainer}>
        <Tasks />
        <Developers />
      </div>
    </section>
  );
};

export default DashboardPage;
