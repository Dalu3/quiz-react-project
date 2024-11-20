import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div className="page1-container">
      <div className="page1-main-div">
        <h1 className="page1-header">Quizzical</h1>
        <button className="page1-button" onClick={() => navigate("/page2")}>
          Start quiz
        </button>
      </div>
    </div>
  );
}
