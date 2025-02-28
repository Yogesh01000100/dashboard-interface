interface SectionHeaderProps {
  label: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label }) => {
  return (
    <div className="text-xs uppercase text-gray-500 px-4 mt-4 mb-2">
      {label}
    </div>
  );
};
