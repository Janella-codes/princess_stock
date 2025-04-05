import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";



const api = "https://princess-stock-api-a2c7e16cc89b.herokuapp.com/api/portfolio/";


export const portfolioAddAPI = async (symbol: string) => {
    try {
      const data = await axios.post<PortfolioPost>(api + `?symbol=${symbol}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const portfolioDeleteAPI = async (symbol: string) => {
    try {
      const data = await axios.delete<PortfolioPost>(api + `?symbol=${symbol}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const portfolioGetAPI = async () => {
    try {
      const data = await axios.get<PortfolioGet[]>(api);
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  