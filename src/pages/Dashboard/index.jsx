import Stats from "@/components/Stats";
import PriorityChart from "@/components/PriorityChart";
import DashboardTasks from "@/components/DashboardTasks";
import Developers from "@/components/Developers";

import styles from "./DashboardPage.module.scss";

const DashboardPage = () => {
  return (
    <section className={styles.dashboard}>
      <Stats />
      <PriorityChart />
      <div className={styles.flexContainer}>
        <DashboardTasks />
        <Developers />
      </div>
    </section>
  );
};

export default DashboardPage;
