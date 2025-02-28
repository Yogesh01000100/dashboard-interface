interface CardProps {
  title: string;
  value: string | number;
  change: string;
  icon: string;
  cta: string;
  ctaLink: string;
}

const Card: React.FC<CardProps> = ({ title, value, change, icon, cta }) => {
  return (
    <div className="bg-white p-3 mx-2 my-2 w-52 border border-cyan-300 shadow-md rounded-lg flex flex-row justify-between">
      <div className="flex flex-col mr-6">
        <div className="font-semibold">{title}</div>
        <div className="font-mono my-1">{value}</div>
        <div className="text-xs">{cta}</div>
      </div>

      <div className="flex flex-col">
        <div>{change}</div>
        <div className="text-sm">{icon}</div>
      </div>
    </div>
  );
};

export default Card;
