import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const SearchPage = (props: Props) => {
  const navigate = useNavigate(); // Initialize useNavigate here
  const [user, setUser] = useState(null);
    const [search, setSearch] = useState<string>('');
    const [PortfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
    const [searchResult, setSearchResults] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>('');

    useEffect(() => {
        getPortfolio();
    }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement> ) => {
      setSearch(e.target.value);
  }
  const clearUserData = () => {
    setUser(null);
    setPortfolioValues([]);
};

  const getPortfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        setPortfolioValues(null);
      });
  };

  const onPortfolioCreate = async (e: any) => {
      e.preventDefault();
      portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Company added to portfolio successfully!");
          getPortfolio();
        }
      }).catch((err) => {
        toast.warning("Error adding company to portfolio");
      })
  };

  const onPortfolioDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement; // Narrow e.target to HTMLFormElement
    const input = target[0] as HTMLInputElement; // Narrow the specific element to HTMLInputElement
    const symbol = input.value; // Access the value property safely
    portfolioDeleteAPI(symbol)
        .then((res) => {
            if (res?.status === 204) {
                toast.success("Company removed from portfolio successfully!");
                getPortfolio(); // Refresh the portfolio data
                console.log("Redirecting to LoggedInSearchPage...");
                navigate("/loggedinsearchpage"); // Redirect to LoggedInSearchPage
            }
        })
        .catch((err) => {
            toast.warning("Error removing company from portfolio");
        });
};


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
    <div >
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