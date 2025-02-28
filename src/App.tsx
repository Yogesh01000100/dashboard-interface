import { useState } from "react";
import { DashBoard } from "./components/DashBoard";
import { SideBar } from "./components/SideBar";

const App = () => {
  const [sideBarStatus, setSidebarStatus] = useState(false);

  return (
    <div className="flex">
      {/* Pass the sidebar state and setter as props */}
      <SideBar status={sideBarStatus} setStatus={setSidebarStatus} />

      {/* Adjust margin-left based on sidebar width */}
      <div
        className={`transition-all duration-300 ${
          sideBarStatus ? "ml-48" : "ml-20"
        } flex-1`}
      >
        <DashBoard />
      </div>
    </div>
  );
};

export default App;
