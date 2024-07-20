import { useSelector } from "react-redux";

const useSearch = () => {
  const query = useSelector((state) => state.search.query);
  return query;
};

export default useSearch;
