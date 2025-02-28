import Card from "./Card";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";

export const DashBoard = () => {
  const data = [
    {
      id: 1,
      title: "USERS",
      value: 720,
      change: "+5%",
      icon: "user",
      cta: "See all users",
      ctaLink: "/users",
    },
    {
      id: 2,
      title: "ORDERS",
      value: 260,
      change: "+2%",
      icon: "cart",
      cta: "View all orders",
      ctaLink: "/orders",
    },
    {
      id: 3,
      title: "EARNINGS",
      value: "$4.6k",
      change: "+12%",
      icon: "dollar",
      cta: "View net earnings",
      ctaLink: "/earnings",
    },
    {
      id: 4,
      title: "MY BALANCE",
      value: "$7.8k",
      change: "+5%",
      icon: "wallet",
      cta: "See details",
      ctaLink: "/balance",
    },
  ];

  return (
    <div className="bg-cyan-50 w-full h-screen p-5">
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        <div className="mx-1 hidden md:block">
          <LineChart />
        </div>
        <div className="mx-1">
          <PieChart />
        </div>
      </div>
    </div>
  );
};
