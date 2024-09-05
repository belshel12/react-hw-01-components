import StatisticsCard from "../StatisticsCard/StatisticsCard";

const Statistics = ({ stats, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(({id, label, percentage}) => (
          <li key={id}>
            <StatisticsCard label={label} percent={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
