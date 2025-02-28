import { Dispatch, SetStateAction } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { SectionHeader } from "./SectionHeader";
import { NavItem } from "./NavItem";

interface SideBarProps {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
}

export const SideBar: React.FC<SideBarProps> = ({ status, setStatus }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white shadow-md transition-all duration-300
        ${status ? "w-48" : "w-20"} flex flex-col
      `}
    >
      <div
        className="flex items-center justify-between p-3 border-b border-gray-200 cursor-pointer"
        onClick={() => setStatus(!status)}
      >
        {status ? (
          <span className="text-xl ml-5 font-bold text-cyan-500">Plane</span>
        ) : (
          <div />
        )}
        <span className="text-gray-600 mr-3 p-1 rounded-xl bg-slate-300">
          {status ? (
            <div className="flex">
              <ChevronLeftRoundedIcon fontSize="small" />
            </div>
          ) : (
            <div className="flex">
              <ChevronRightRoundedIcon fontSize="small" />
            </div>
          )}
        </span>
      </div>

      <div className="flex-1 px-3">
        <SectionHeader label="Main" />
        <NavItem icon={<DashboardIcon />} label="Dashboard" visible={status} />

        <SectionHeader label="Lists" />
        <NavItem icon={<PeopleIcon />} label="Users" visible={status} />
        <NavItem icon={<Inventory2Icon />} label="Products" visible={status} />
        <NavItem icon={<ShoppingCartIcon />} label="Orders" visible={status} />
        <NavItem
          icon={<LocalShippingIcon />}
          label="Delivery"
          visible={status}
        />

        <SectionHeader label="Useful" />
        <NavItem icon={<BarChartIcon />} label="Stats" visible={status} />
        <NavItem
          icon={<NotificationsIcon />}
          label="Notifications"
          visible={status}
        />

        <SectionHeader label="Service" />
        <NavItem icon={<SettingsIcon />} label="Settings" visible={status} />

        <SectionHeader label="User" />
        <NavItem icon={<LogoutIcon />} label="Logout" visible={status} />
      </div>
    </div>
  );
};
