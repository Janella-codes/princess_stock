import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import { toast } from 'react-toastify';

type Props = {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>('');
    const [PortfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
    const [searchResult, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>('');

    useEffect(() => {
        getPortFolio();
    }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement> ) => {
      setSearch(e.target.value);
  }

  const getPortFolio = () => {
      portfolioGetAPI()
      .then((res) => {
      if (res?.data) {
        setPortfolioValues(res?.data);
        getPortFolio();
      }
      }).catch((err) => {
        toast.warning("Error fetching portfolio data");
        setPortfolioValues(null);
      })
  };

  const onPortfolioCreate = async (e: any) => {
      e.preventDefault();
      portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Company added to portfolio successfully!");
          getPortFolio();
        }
      }).catch((err) => {
        toast.warning("Error adding company to portfolio");
      })
  };

  const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      portfolioDeleteAPI(e.target[0].value).then((res) => {
        if (res?.status === 204) {
          toast.success("Company removed from portfolio successfully!");
          getPortFolio();
        }
      });
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
            portfolioValues={PortfolioValues!} 
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