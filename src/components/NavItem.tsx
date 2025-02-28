import Tooltip from "@mui/material/Tooltip";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  visible: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, visible }) => {
  const content = (
    <div className="flex items-center text-gray-600 hover:text-cyan-500 px-4 py-2 cursor-pointer">
      <span className="text-lg mr-3">{icon}</span>
      {visible && (
        <span className="whitespace-nowrap transition-opacity duration-200 opacity-100 delay-100">
          {label}
        </span>
      )}
    </div>
  );

  return !visible ? (
    <Tooltip title={label} placement="right" arrow>
      {content}
    </Tooltip>
  ) : (
    content
  );
};
