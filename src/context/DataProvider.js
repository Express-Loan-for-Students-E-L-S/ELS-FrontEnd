import React, { createContext, useState, useContext } from 'react';
import AuthService from "../services/auth.service";
const DataContext = createContext();
export function useData() {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error('useData must be used within an DataProvider');
    }

    return context;

}

const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [userDetails, setUserDetails] = useState(AuthService.getCurrentUser().userDetails);

    function signup(fname, lname, email, password) {
        return AuthService.register(fname, lname, email, password);
    }

    function login(email, password) {
        return AuthService.login(email, password);
    }

    function logout() {
        return AuthService.logout();
    }

    return (
        <DataContext.Provider value={{ data, login, signup, logout, userDetails, setUserDetails }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider