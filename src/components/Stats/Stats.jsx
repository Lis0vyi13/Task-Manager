import StatsCard from "./StatsCard/StatsCard";

import { statsCards } from "@/constants";

import styles from "./Stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.statsList}>
      {statsCards.map((card) => (
        <StatsCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Stats;
