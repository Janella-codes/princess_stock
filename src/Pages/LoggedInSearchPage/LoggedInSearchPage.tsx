import React, { useEffect, useState } from 'react';
import Search from '../../Components/Search/Search';
import UserPortfolio from '../../Services/UserPortfolio';
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioGetAPI } from '../../Services/PortfolioService';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const LoggedInSearchPage = () => {
    const [portfolio, setPortfolio] = useState<PortfolioGet[] | null>([]);
    const navigate = useNavigate();

    // Fetch the user's portfolio on component mount
    useEffect(() => {
        fetchPortfolio();
    }, []);

    const fetchPortfolio = () => {
        portfolioGetAPI()
            .then((res) => {
                if (res?.data) {
                    setPortfolio(res.data); // Update portfolio state with fetched data
                }
            })
            .catch((err) => {
                toast.warning("Failed to fetch portfolio");
                setPortfolio(null); // Handle API errors gracefully
            });
    };

    const clearCacheAndRedirect = () => {
        setPortfolio([]); // Clear the portfolio state
        navigate("/search"); // Navigate to the SearchPage
    };

    return (
        <div className="logged-in-page">
            <h1>Your Portfolio</h1>

            {portfolio && portfolio.length > 0 ? (
                <ul>
                    {portfolio.map((stock) => (
                        <li key={stock.id}> {/* Ensure each item has a unique key */}
                            <strong>{stock.symbol}</strong>: {stock.companyName}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No stocks found in your portfolio.</p>
            )}

            {/* Link back to the main search page with cache clearing */}
            <button onClick={clearCacheAndRedirect} className="back-to-search">
                Back to Search
            </button><br /><br />

            <Link to="https://www.janellasplace.com" className="search-link">Janella's place</Link>

            {/* Search component for searching stocks */}
        </div>
    );
};

export default LoggedInSearchPage;