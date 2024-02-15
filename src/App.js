import React from "react";
import CustomerList from "./CustomerList";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Reward Points Calculator</h1>
      <CustomerList />
    </div>
  );
}

export default App;
