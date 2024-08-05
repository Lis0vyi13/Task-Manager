import Title from "@/ui/Title";

import Activity from "./Activity";
import Form from "./Form";

import styles from "./Activities.module.scss";

const Activities = ({ task }) => {
  return (
    <section className={styles.activitiesWrapper}>
      <article className={styles.left}>
        <Title className={styles.title}>Activities</Title>
        <div className={styles.activities}>
          {task?.activities?.length > 0
            ? task?.activities.map((activity) => (
                <Activity activity={activity} key={activity._id} />
              ))
            : "No activities added"}
        </div>
      </article>

      <article className={styles.right}>
        <Title className={styles.title}>Add activity</Title>
        <Form />
      </article>
    </section>
  );
};

export default Activities;
