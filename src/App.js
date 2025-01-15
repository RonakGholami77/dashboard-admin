import "./App.css";
import { useRoutes } from "react-router";
import routes from "./routes";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  let router = useRoutes(routes);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <TopBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div style={{ width: "100%" }}>{router}</div>
      </div>
    </div>
  );
}

export default App;
