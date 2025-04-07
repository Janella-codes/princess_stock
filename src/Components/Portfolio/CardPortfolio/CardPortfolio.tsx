import { SyntheticEvent } from "react";
import { PortfolioGet } from "../../../Models/Portfolio";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent) => void;
  }
  
  const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
    return (
      <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-sm md:w-1/3">
        <Link
          to={`/company/${portfolioValue.symbol}/company-profile`}
          className="pt-6 text-xl font-bold"
        >
          {portfolioValue.symbol}
        </Link>
        <DeletePortfolio
          portfolioValue={portfolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    );
  };
  
  export default CardPortfolio;
  