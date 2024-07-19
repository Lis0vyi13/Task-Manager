import styles from "./CustomTooltip.module.scss";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.label}>{`${label}`}</p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            className={styles.item}
            style={{ color: entry.color }}
          >
            {`${entry.name} : ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
