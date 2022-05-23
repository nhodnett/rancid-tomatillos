import React from "react";
import "../styles/ErrorMessage.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="errorContainer">
      <h1 className="errorMessage">{message}</h1>
    </div>
  );
};

export default ErrorMessage;
