import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashflowStatement from "../Components/CashflowStatement/CashflowStatement";
import HistoricalDividend from "../Components/HistoricalDividend/HistoricalDividend";
import DesignGuide from "../Pages/DesignGuide/DesignGuide";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import LoggedInSearchPage from "../Pages/LoggedInSearchPage/LoggedInSearchPage";
import SearchPage from "../Pages/SearchPage/SearchPage"; // Add this import
import { SyntheticEvent } from "react";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "design-guide", element: <DesignGuide /> },
        {
          path: "loggedinsearchpage", // Define route for LoggedInSearchPage
          element: <LoggedInSearchPage />,
      },
        {
          path: "search",
          element: (
            <ProtectedRoute>
              <SearchPage portfolioValue={""} onPortfolioDelete={function (e: SyntheticEvent): void {
                throw new Error("Function not implemented.");
              } } />
            </ProtectedRoute>
          ),
        },
        {
          path: "company/:ticker",
          element: (
            <ProtectedRoute>
              <CompanyPage />
            </ProtectedRoute>
          ),
          children: [
            { path: "company-profile", element: <CompanyProfile /> },
            { path: "income-statement", element: <IncomeStatement /> },
            { path: "balance-sheet", element: <BalanceSheet /> },
            { path: "cashflow-statement", element: <CashflowStatement /> },
            { path: "historical-dividend", element: <HistoricalDividend /> },
          ],
        },
      ],
    },
]);