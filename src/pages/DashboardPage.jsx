import DashboardCardList from "@/components/Dashboard/DashboardCardList/DashboardCardList";
import PriorityChart from "@/components/PriorityChart/PriorityChart";

const DashboardPage = () => {
  return (
    <section className="dashboard">
      <DashboardCardList />
      <PriorityChart />
    </section>
  );
};

export default DashboardPage;
