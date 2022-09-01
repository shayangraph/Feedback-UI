import React from "react";
import Card from "../Component/Shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>this is a react app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
