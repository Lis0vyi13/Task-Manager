import { useParams } from "react-router-dom";
import styles from "./TaskDetail.module.scss";
import { tasks } from "@/constants";

const ID = "65c5f12ab5204a81bde866a9";

const TaskDetail = () => {
  const { id } = useParams();

  return <div>TaskDetail</div>;
};

export default TaskDetail;
