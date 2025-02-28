import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

interface HeaderProps {
  status: boolean;
  setStatus: (status: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ status, setStatus }) => {
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
      <h1 className="text-xl ml-5 font-bold text-cyan-500">Plane</h1>
      <button onClick={() => setStatus(!status)} className="text-gray-600">
        {status ? (
          <ChevronLeftRoundedIcon fontSize="small" />
        ) : (
          <MenuIcon fontSize="small" />
        )}
      </button>
    </div>
  );
};
