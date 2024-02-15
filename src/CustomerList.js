import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import styles from "./CustomerList.module.css";
import axios from "axios";

function CustomerList() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "First Customer",
      transactions: [
        {
          amount: 120,
          month: "January",
        },
        {
          amount: 53,
          month: "February",
        },
        {
          amount: 88,
          month: "March",
        },
      ],
      rewards: {},
    },
    {
      id: 2,
      name: "Second Customer",
      transactions: [
        {
          amount: 154,
          month: "January",
        },
        {
          amount: 99,
          month: "February",
        },
        {
          amount: 10,
          month: "March",
        },
      ],
      rewards: {},
    },
  ]);

  useEffect(() => {
    const updatedObj = (response) => {
      let rewards = Object.entries(response).map(([k, v]) => ({ [k]: v }));
      let rewardsperMonthArr = [];

      rewards.forEach((x) => {
        let rewardsperMonth = {};
        rewardsperMonth.month = Object.keys(x)[0];
        rewardsperMonth.points = Object.values(x)[0];
        rewardsperMonthArr.push(rewardsperMonth);
      });
      return rewardsperMonthArr;
    };
    const fetchData = async () => {
      try {
        const { data: response1 } = await axios.post(
          "http://localhost:8080/rewards",
          customers[0]
        );
        customers[0].rewards = response1;
        customers[0].rewards.rewardsPerMonth = updatedObj(
          response1.rewardsPerMonth
        );

        const { data: response2 } = await axios.post(
          "http://localhost:8080/rewards",
          customers[1]
        );
        customers[1].rewards = response2;
        customers[1].rewards.rewardsPerMonth = updatedObj(
          response2.rewardsPerMonth
        );

        setCustomers([customers[0], customers[1]]);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.customerList}>
      <h2 className={styles.heading}>Customer List</h2>
      <div className="row">
        {customers.map((customer) => (
          <div key={customer.id} className="col-md-6">
            <div className={styles.customer}>
              <h3 className={styles.customerName}>{customer.name}</h3>
              <TransactionList customerObj={customer} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerList;
