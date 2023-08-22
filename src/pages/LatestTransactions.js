import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../styles/LatestTransactions.css"; // Import your custom CSS file

export const LatestTransactions = () => {
  const paymentTypes = ["Card Payment", "Cash"];
  const categories = ["Clothes", "Food", "Pharmacy"];

  const generateRandomDate = () => {
    const startDate = new Date("2023-01-01");
    const endDate = new Date(); // Current date
    const randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime()),
    );

    const day = String(randomDate.getDate()).padStart(2, "0");
    const month = String(randomDate.getMonth() + 1).padStart(2, "0");
    const year = randomDate.getFullYear();

    return `${year}/${month}/${day}`;
  };

  const generateRandomAmount = () => {
    return `$-${(10 + Math.random() * 90).toFixed(2)}`;
  };

  const generateRandomTransaction = () => {
    const paymentType =
      paymentTypes[Math.floor(Math.random() * paymentTypes.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const date = generateRandomDate();
    const amount = generateRandomAmount();

    return {
      paymentType,
      category,
      date,
      amount,
    };
  };

  useEffect(() => {
    const transactions = Array.from({ length: 10 }, () =>
      generateRandomTransaction(),
    );
    transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    const tableBody = document.getElementById("transactions-table-body");
    transactions.forEach((transaction) => {
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = transaction.date;
      row.insertCell(1).textContent = transaction.paymentType;
      row.insertCell(2).textContent = transaction.category;
      row.insertCell(3).textContent = transaction.amount;
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h4>Latest Transactions</h4>
      </div>

      <div className="dashboard-content">
        <Table className="transactions-table" striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Payment Type</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody id="transactions-table-body"> </tbody>
        </Table>
      </div>
    </div>
  );
};
