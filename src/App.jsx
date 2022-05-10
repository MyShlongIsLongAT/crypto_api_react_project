import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, CryptoDetail, ProtectedRoute } from "./components";
import { Homepage, Cryptocurrencies, SignUp, Account, SignIn } from "./pages";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import { CoinProvider } from "./services/coinContext";
import { AuthContextProvider } from "./services/authContext";
import { StorageContextProvider } from "./services/storageContext";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (search) => {
    setSearchTerm(search);
  };

  return (
    <AuthContextProvider>
      <StorageContextProvider>
        <div className="app">
          <div className="navbar">
            <Navbar searchHandler={searchHandler} />
          </div>
          <div className="main">
            <CoinProvider>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<Homepage />} />
                  <Route
                    exact
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies search={searchTerm} />}
                  />
                  <Route
                    path="/cryptocurrencies/:id"
                    element={<CryptoDetail />}
                  />
                  <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="signin" element={<SignIn />} />
                  <Route
                    exact
                    path="/account"
                    element={
                      <ProtectedRoute>
                        <Account></Account>
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </div>
            </CoinProvider>
          </div>
        </div>
      </StorageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
