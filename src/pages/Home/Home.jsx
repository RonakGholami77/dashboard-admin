import "./home.css";
import Features from "./Features/Features";
import Chart from "./Charts/Chart";
import data from "./Charts/data";

function Home() {
  return (
    <div className="home">
      <Features />
      <Chart
        data={data}
        title="User Analytics"
        grid
        lineKey="sales"
        xKey="month"
      />
      <div style={{ display: "flex" }}></div>
    </div>
  );
}

export default Home;
