import React, { useState } from "react";
import styles from "./nameBox.module.css";
import { digitLimiter } from "../../services/globalFunctions.js";

const NameBox = (props) => {
  const [coinInfo] = useState(props.coinInfo);

  return (
    <div className={styles.nameBox}>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td width="10%">
              <img src={coinInfo.iconUrl} width="50px" alt="Logo" />
            </td>
            <td width="60%">
              <h1>{coinInfo.name}</h1>
              <span>{coinInfo.symbol}</span>
            </td>
            <td width="30%">{digitLimiter(coinInfo.price)}</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.coinInfoBox}>
        <h3>Über {coinInfo.symbol}:</h3>
        Adipisicing id irure enim sunt labore. Aute irure deserunt adipisicing
        Lorem sunt quis aute tempor. Laborum exercitation occaecat in dolor
        consequat reprehenderit labore velit. Sunt in mollit velit occaecat et
        consectetur mollit ea excepteur esse. Ullamco incididunt mollit
        consectetur non veniam culpa Lorem.
      </div>
    </div>
  );
};
export default NameBox;
