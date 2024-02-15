import React, { useState } from "react";
import RewardCalculator from "./RewardCalculator";
import styles from "./TransactionList.module.css";
import TransactionTable from "./TransactionTable";

function TransactionList({ customerObj }) {
  const reformatTransactions = () => {};
  return (
    <div className={styles.transactionList}>
      <h4 className={styles.heading}>Transactions</h4>
      {customerObj.rewards && (
        <TransactionTable transactions={customerObj.rewards.rewardsPerMonth} />
      )}
      {customerObj.rewards && (
        <RewardCalculator totalPoints={customerObj.rewards.totalRewards} />
      )}
    </div>
  );
}

export default TransactionList;
