import React from "react";
import styles from "./coinContainer.module.css";

const CoinContainer = (props) => {
  return (
    <div className={styles.wholeContainer}>
      <div className={styles.symbolCoin}>{props.symbol}</div>
      <div className={styles.textCoin}>
        <h2>{props.name}</h2>
        {props.price}
      </div>
      <div className={styles.imageCoin}>
        <img src={props.iconUrl} width="50px" alt="Logo" />
      </div>
    </div>
  );
};

export default CoinContainer;
