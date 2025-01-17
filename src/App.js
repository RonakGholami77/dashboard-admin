import "./App.css";
import { useRoutes } from "react-router";
import routes from "./routes";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div style={{ display: "flex", marginTop: "10px" }}>
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
