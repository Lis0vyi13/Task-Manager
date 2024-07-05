import { useNavigate } from "react-router-dom";

const useTaskDetailHandler = () => {
  const navigate = useNavigate();

  const taskDetailHandler = (id) => {
    navigate(`/task/${id}`);
  };

  return taskDetailHandler;
};
export default useTaskDetailHandler;
