import { useState } from "react";
import { DashBoard } from "./components/DashBoard";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";

const App = () => {
  const [sideBarStatus, setSidebarStatus] = useState(true);

  return (
    <div>
      <div className="block md:hidden">
        <Header status={sideBarStatus} setStatus={setSidebarStatus} />
      </div>

      <div className="flex">
        <div className="hidden md:block">
          <SideBar status={sideBarStatus} setStatus={setSidebarStatus} />
        </div>

        <div
          className={`transition-all duration-300 flex-1 ${
            sideBarStatus ? "md:ml-48" : "md:ml-20"
          }`}
        >
          <DashBoard />
        </div>
      </div>
    </div>
  );
};

export default App;
