function ExpenseDetails(props) {
  const {title, amount, E} = props;
  return (
    <div>
      <div>{title}</div>
      <div>{amount}</div>
      <div>{E}</div>
    </div>
  );
}
export default ExpenseDetails;
