import React, { useState } from "react";
import styles from "./nameBox.module.css";
import { DigitLimiter, CheckChange } from "../index.js";

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
              <p>{coinInfo.symbol}</p>
            </td>
            <td
              width="30%"
              className={
                CheckChange(coinInfo.change)
                  ? styles.positivChange
                  : styles.negativChange
              }
              style={{ textAlign: "right" }}
            >
              $ {DigitLimiter(coinInfo.price)}
              <div
                className={
                  CheckChange(coinInfo.change)
                    ? styles.positivChange
                    : styles.negativChange
                }
              >
                {coinInfo.change}%
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.coinInfoBox} width="100%">
        <h3>Über {coinInfo.name}:</h3>
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
