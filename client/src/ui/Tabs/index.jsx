import { memo } from "react";
import Tab from "./Tab";

import styles from "./Tabs.module.scss";

const Tabs = memo(({ data, activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabs}>
      {data.map((tab) => (
        <Tab
          key={tab.id}
          isActive={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
          {...tab}
        />
      ))}
    </div>
  );
});

export default Tabs;
