import React from "react";
import { Table } from "react-bootstrap";

function TransactionTable({ transactions }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Month</th>
          <th>Monthly Rewards</th>
        </tr>
      </thead>
      <tbody>
        {transactions &&
          transactions.length > 0 &&
          transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{transaction.month}</td>
              <td>${transaction.points.toFixed(2)}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TransactionTable;
