import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import FeedbackList from "./Component/FeedbakcList";
import FeedbackData from "./data/FeedbackData";
import FeedbackState from "./Component/FeedbackState";
import FeedbackForm from "./Component/FeedbackForm";
import AboutIcon from "./Component/AboutIcon";
import { FeedbackProvider } from "./Context/FeedbackContext";
import AboutPage from "./pages/About";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackState />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default App;
