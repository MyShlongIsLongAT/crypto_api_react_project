import React, { useEffect, useState } from "react";
import styles from "./coinContainer.module.css";

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
        <table style={{width:"100%"}}>
          <tr>
            <td width="30%">
              <img src={props.iconUrl} width="30px" alt="Logo" />
            </td>
            <td width="30%">
              <h3>{props.symbol}</h3>
            </td>
            <td width="40%">
              <h5>{"$ " + parseFloat(props.price).toFixed(5)}</h5>
            </td>
          </tr>
        </table>
      )}
      {!matches && (
        <table>
          <tr>
            <td width="100">
              <img src={props.iconUrl} width="50px" alt="Logo" />
            </td>
            <td width="260">
              <h3>{props.name}</h3>
              <span>{props.symbol}</span>
            </td>
            <td width="110">
              <h5>{"$ " + parseFloat(props.price).toFixed(5)}</h5>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default CoinContainer;
