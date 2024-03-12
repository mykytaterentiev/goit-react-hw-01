import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const listItems = items.map((item) => (
    <tr key={item.id}>
      <th>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</th>
      <th>{item.amount}</th>
      <th>{item.currency}</th>
    </tr>
  ));
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
};

export default TransactionHistory;