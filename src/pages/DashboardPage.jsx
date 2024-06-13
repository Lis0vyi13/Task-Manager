import useActions from "../hooks/useActions";
import Button from "../ui/Button/Button";

const DashboardPage = () => {
  const { logOut } = useActions();

  return (
    <div>
      <Button onClick={() => logOut()}>Logout</Button>
    </div>
  );
};

export default DashboardPage;
