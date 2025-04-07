import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent, symbol: string) => void;
  portfolioValue: string;
}

const DeletePortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }) => {
  const navigate = useNavigate(); // Initialize navigate hook at the top level of the component

  const handleDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    onPortfolioDelete(e, portfolioValue); // Call the onPortfolioDelete function
    navigate("/loggedInSearchPage"); // Redirect to LoggedInSearchPage
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value changed:", e.target.value); // Debugging
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="text"
        value={portfolioValue} // Controlled input
        onChange={handleChange} // Add this handler
        readOnly // Optional: Make the field read-only since it’s displaying static info
        className="input-field"
      />
      <button type="submit">Delete</button>
    </form>
  );
};

export default DeletePortfolio;