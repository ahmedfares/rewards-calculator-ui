import React from "react";
import styles from "./RewardCalculator.module.css";

function RewardCalculator({ totalPoints }) {
  return (
    <div className={styles.rewardCalculator}>
      <h5 className={styles.heading}>Reward Points</h5>
      <p className={styles.points}>Total Points: {totalPoints}</p>
    </div>
  );
}

export default RewardCalculator;
