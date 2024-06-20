import StatsCard from "../StatsCard/StatsCard";

import { statsCards } from "@/constants";

import styles from "./StatsCardsList.module.scss";

const StatsCardsList = () => {
  return (
    <div className={styles.statsList}>
      {statsCards.map((card) => (
        <StatsCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default StatsCardsList;
