import React, { useContext, useState, useEffect } from "react";
import CoinContainer from "./coinContainer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { coinContext } from "../services/coinContext";

const CoinList = () => {
  const data = useContext(coinContext);

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1046px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1046px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div>
      {matches && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ s: 3, xs: 3, sm: 8, md: 12 }}
          >
            {data.coins.map((coin, index) => (
              <Grid
                item
                xs={3}
                sm={4}
                md={4}
                key={index}
                
              >
                <CoinContainer
                  price={coin.price}
                  iconUrl={coin.iconUrl}
                  symbol={coin.symbol}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {!matches && (
        <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ s: 3, xs: 3, sm: 8, md: 12 }}
        >
          {data.coins.map((coin, index) => (
            <Grid
              item
              xs={3}
              sm={4}
              md={4}
              key={index}
              
            >
              <CoinContainer
                name={coin.name}
                price={coin.price}
                iconUrl={coin.iconUrl}
                symbol={coin.symbol}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      )}
    </div>
  );
};

export default CoinList;
