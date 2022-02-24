import React, { useContext } from "react";
import CoinContainer from "./coinContainer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { coinContext } from "../services/coinContext";

const CoinList = () => {
  const data = useContext(coinContext);
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.coins.map((coin, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
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
    </div>
  );
};

export default CoinList;
