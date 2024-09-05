const StatisticsCard = ({ label, percent }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percent}%</span>
    </>
  );
};

export default StatisticsCard;
