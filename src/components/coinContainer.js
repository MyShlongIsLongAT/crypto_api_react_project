import React, { useEffect, useState } from "react";
import styles from "./coinContainer.module.css";
import { DigitLimiter, CheckChange, AddPlus } from "./index.js";

const CoinContainer = (props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1100px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1100px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className={styles.wholeContainer}>
      {matches && (
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td width="30%">
                <img src={props.iconUrl} width="30px" alt="Logo" />
              </td>
              <td width="30%">
                <h3>{props.symbol}</h3>
              </td>
              <td
                width="40%"
                className={
                  CheckChange(props.change)
                    ? styles.positivChange
                    : styles.negativChange
                }
              >
                <h5>{"$ " + DigitLimiter(props.price)}</h5>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {!matches && (
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td width="30%">
                <img src={props.iconUrl} width="50px" alt="Logo" />
              </td>
              <td width="30%">
                <h3>{props.name}</h3>
                <span>{props.symbol}</span>
              </td>
              <td
              width="30%"
              className={
                CheckChange(props.change)
                  ? styles.positivChange
                  : styles.negativChange
              }
              style={{ textAlign: "right" }}
            >
              ${DigitLimiter(props.price)}
              <div
                className={
                  CheckChange(props.change)
                    ? styles.positivChange
                    : styles.negativChange
                }
              >
                {AddPlus(props.change)}%
              </div>
            </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinContainer;
