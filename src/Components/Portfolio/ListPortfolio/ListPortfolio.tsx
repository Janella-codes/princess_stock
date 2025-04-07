import { SyntheticEvent } from "react";
import { PortfolioGet } from "../../../Models/Portfolio";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
    portfolioValues: PortfolioGet[];  
    onPortfolioDelete: (e: SyntheticEvent) => void;
  }
  
  const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return (
      <section id="portfolio" className="flex flex-col items-center ">
        <h2 className="w-30 text-3xl font-semibold text-center md:text-4xl">
          My Portfolio
        </h2>
        <div className="relative flex flex-col items-center  md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          <>
            {portfolioValues.length > 0 ? (
              portfolioValues.map((portfolioValue) => {
                return (
                  <CardPortfolio
                    key={portfolioValue.symbol}
                    portfolioValue={portfolioValue}
                    onPortfolioDelete={onPortfolioDelete}
                  />
                );
              })
            ) : (
              <>
              <p className="text-xl font-semibold text-center">
    Your portfolio is empty. Try adding some stocks! 🤷‍♀️👏😭👺
  </p>
             
            
              </>
            )}
          </>
          
        </div>
        <h1 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
        You can do it! </h1>☝💅🙏
      </section>
    );
  };
  
  export default ListPortfolio;