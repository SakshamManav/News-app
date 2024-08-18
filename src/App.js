// import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [categories, setCategories] = useState("general");
  const [country, setCountry] = useState();
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  country="in"
                  category="General"
                  pageSize={5}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  country="in"
                  category="Sports"
                  pageSize={5}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  country="in"
                  key="entertainment"
                  category="Entertainment"
                  pageSize={5}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  country="in"
                  key="science"
                  category="Science"
                  pageSize={5}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  country="in"
                  key="health"
                  category="Health"
                  pageSize={5}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  country="in"
                  key="technology"
                  category="Technology"
                  pageSize={5}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  country="in"
                  key="business"
                  category="Business"
                  pageSize={5}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
