import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

type Props = {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>('');
    const [PortfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement> ) => {
      setSearch(e.target.value);
  }

  const onPortfolioCreate = async (e: any) => {
      e.preventDefault();
      const updatedPortfolio = [...PortfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
  }

  const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      const remove = PortfolioValues.filter((value) => {
        return value !== e.target[0].value
      });
      setPortfolioValues(remove);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result === 'string') {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResults(result.data);
      }
  }

  return (
    <div className="App">
        <Search 
            onSearchSubmit={onSearchSubmit} 
            search={search} 
            handleSearchChange={handleSearchChange}
        />
        <ListPortfolio 
            portfolioValues={PortfolioValues} 
            onPortfolioDelete={onPortfolioDelete}
        />
        <CardList 
            searchResults={searchResult} 
            onPortfolioCreate={onPortfolioCreate}
        />
        {serverError && <h1>{serverError}</h1>}
    </div>
  )
}

export default SearchPage;