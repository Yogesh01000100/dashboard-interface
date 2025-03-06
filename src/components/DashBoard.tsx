import Card from "./Card";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import {
  People as UsersIcon,
  ShoppingCart as OrdersIcon,
  AttachMoney as EarningsIcon,
  AccountBalanceWallet as BalanceIcon,
} from "@mui/icons-material";
import Users from "./Users";

export const DashBoard = () => {
  const data = [
    {
      id: 1,
      title: "USERS",
      value: 720,
      change: "+1%",
      icon: <UsersIcon fontSize="medium" className="text-cyan-500" />,
      cta: "See all users",
      ctaLink: "/",
    },
    {
      id: 2,
      title: "ORDERS",
      value: 260,
      change: "+2%",
      icon: <OrdersIcon fontSize="medium" className="text-cyan-500" />,
      cta: "View all orders",
      ctaLink: "/orders",
    },
    {
      id: 3,
      title: "EARNINGS",
      value: "$4.6k",
      change: "+12%",
      icon: <EarningsIcon fontSize="medium" className="text-cyan-500" />,
      cta: "View net earnings",
      ctaLink: "/earnings",
    },
    {
      id: 4,
      title: "MY BALANCE",
      value: "$7.8k",
      change: "-5%",
      icon: <BalanceIcon fontSize="medium" className="text-cyan-500" />,
      cta: "See details",
      ctaLink: "/balance",
    },
  ];

  return (
    <div className="bg-cyan-50 w-full min-h-screen flex flex-col p-5">
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        <div className="mx-1">
          <LineChart />
        </div>
        <div className="mx-1">
          <PieChart />
        </div>
      </div>
      <div>
        <Users />
      </div>
    </div>
  );
};
