import Tab from "./Tab/Tab";

import styles from "./Tabs.module.scss";

const Tabs = ({ data, activeTab, setActiveTab }) => {
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
};

export default Tabs;
