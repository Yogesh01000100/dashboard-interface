interface CardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  cta: string;
  ctaLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  change,
  icon,
  cta,
  ctaLink,
}) => {
  return (
    <div className="border border-cyan-300 mx-2 my-2 bg-white px-3 pt-1 pb-3 w-60 shadow-md rounded-xl flex flex-col">
      <div className="flex items-center justify-between my-1">
        <div className="flex flex-row justify-center items-center">
          <div className="text-2xl">{icon}</div>
          <h3 className="text-gray-700 text-sm font-normal mx-1 mt-2">
            {title}
          </h3>
        </div>

        <span
          className={`text-sm font-semibold ${
            change.includes("+") ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      <div>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>

      <a
        href={ctaLink}
        className="text-blue-600 text-xs font-light hover:underline"
      >
        {cta}
      </a>
    </div>
  );
};

export default Card;
