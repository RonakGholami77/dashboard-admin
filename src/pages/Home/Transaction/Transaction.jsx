import { transactionData } from "../../../shared/salesData";

function Transaction() {
  const Button = ({ type }) => {
    return <button className={`btn ${type}`}>{type}</button>;
  };

  return (
    <div className="layoutCardSecond">
      <h3 className="homeTitle">Latest Transaction</h3>
      <table className="transactionTable">
        <tr className="">
          <th className="headItem">Customer</th>
          <th className="headItem">Date</th>
          <th className="headItem">Amount</th>
          <th className="headItem">Status</th>
        </tr>
        {transactionData.map((trans, index) => (
          <tr key={index} className="tr">
            <td className="customer">
              <img
                className="imgCustomer"
                src="./assets/images/user.png"
                alt="user"
              />
              <span className="customerName">{trans.name}</span>
            </td>
            <td className="date">{trans.transaction[0].date}</td>
            <td className="amount">$ {trans.transaction[0].amount}</td>
            <td className="status">
              <Button type={trans.transaction[0].status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Transaction;
