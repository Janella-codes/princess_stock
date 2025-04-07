import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { PortfolioGet } from '../Models/Portfolio';
import { portfolioGetAPI } from './PortfolioService';
import ListPortfolio from '../Components/Portfolio/ListPortfolio/ListPortfolio';

type UserPortfolioProps = {
    userId: string;
};

const UserPortfolio = ({ userId }: UserPortfolioProps) => {
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);

    useEffect(() => {
        getPortfolio();
    }, [userId]);

    const getPortfolio = () => {
        portfolioGetAPI()
            .then((res) => {
                if (res?.data) {
                    setPortfolioValues(res.data);
                }
            })
            .catch((err) => {
                toast.warning("Error fetching portfolio data");
                setPortfolioValues(null);
            });
    };

    return (
        <div>
            <h2>User's Portfolio</h2>
            <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={function (e: React.SyntheticEvent): void {
                throw new Error('Function not implemented.');
            } } />
        </div>
    );
};

export default UserPortfolio;
