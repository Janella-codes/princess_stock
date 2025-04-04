import axios from "axios";
import { UserProfileToken } from "../Models/User";
import { handleError } from "../Helpers/ErrorHandler";

const api = "https://princess-stock-api-a2c7e16cc89b.herokuapp.com/api";

    export const loginAPI = async (username: 
    string, password: string) => {try {
    const data = await axios.post<UserProfileToken>
    (api + "account/login", {username: username,
    password: password,}); return data;} 
    catch (error) {handleError(error);}};

    export const registerAPI = async (email: string,  
    username: string, password: string) => {try {
    const data = await axios.post<UserProfileToken>
    (api + "account/register", 
    {email: email, username: username, password: password,});
    return data;} catch (error) {
    handleError(error);}};


