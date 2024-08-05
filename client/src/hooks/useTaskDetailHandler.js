import { useNavigate } from "react-router-dom";

const useTaskDetailHandler = () => {
  const navigate = useNavigate();

  const taskDetailHandler = (id, state) => {
    navigate(`/task/${id}`, { state });
  };

  return taskDetailHandler;
};
export default useTaskDetailHandler;
