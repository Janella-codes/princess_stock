import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ 
    id,
    searchResult,
    onPortfolioCreate
}: Props): JSX.Element => {
  return (
<div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-400 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
    <img 
        src="https://images.unsplash.com/photo-1517398771889-dd2d7851a828?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="princess cake" 
        className="h-32 w-32" 
    />
     <Link
        to={`/company/${searchResult.symbol}/company-profile`}
        className="font-bold text-center text-veryDarkViolet md:text-left"
      >
        {searchResult.name} ({searchResult.symbol})
      </Link>
     
     <div>
        <p className="text-veryDarkBlue">{searchResult.currency}</p>
        <p className="font-bold text-veryDarkBlue">
            {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
     </div>
     <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
   
</div>
    );
    }

export default Card;