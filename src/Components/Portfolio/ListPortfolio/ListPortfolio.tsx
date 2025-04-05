import { SyntheticEvent } from "react";
import { PortfolioGet } from "../../../Models/Portfolio";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
    portfolioValues: PortfolioGet[];  
    onPortfolioDelete: (e: SyntheticEvent) => void;
  }
  
  const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return (
      <section id="portfolio">
        <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
          My Portfolio
        </h2>
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          <>
            {portfolioValues.length > 0 ? (
              portfolioValues.map((portfolioValue) => {
                return (
                  <CardPortfolio
                    portfolioValue={portfolioValue}
                    onPortfolioDelete={onPortfolioDelete}
                  />
                );
              })
            ) : (
              <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                Your portfolio is empty. Add some stocks!
                You suck at investing.🤷‍♀️👏😭👺💩
              </h3>
              
            )}
          </>
          
        </div>
        <h1 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          Do Better ~~~~ Dumbass ~~ Fuck you</h1>☝💅🙏

      </section>
    );
  };
  
  export default ListPortfolio;