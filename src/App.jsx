import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { feedbackData } from "./data/feedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
        </Routes>

        {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="">
            About
          </NavLink>
        </Card> */}

        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
