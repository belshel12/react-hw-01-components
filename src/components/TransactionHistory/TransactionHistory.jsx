import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionItem data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
