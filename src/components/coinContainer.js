import React from "react";
import styles from "./coinContainer.module.css";

const coinContainer = (props) => {
  return (
    <div className={styles.wholeContainer}>
      <table>
        <tr>
          <td width="100">
            <img src={props.iconUrl} width="50px" alt="Logo" />
          </td>
          <td width="270">
            <h3>{props.name}</h3>
            <span>{props.symbol}</span>
          </td>
          <td width="100">
            <h5>{"$ " + parseFloat(props.price).toFixed(5)}</h5>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default coinContainer;
