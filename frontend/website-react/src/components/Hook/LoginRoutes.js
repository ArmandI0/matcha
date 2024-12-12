import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import IsAuthenticated from './IsAuthenticated';

export function LoginRoute({ children }) {
    const { isAuthenticated , login, logout} = useContext(AuthContext);
    const [authStatus, setAuthStatus] = useState(null);

    useEffect(() => {
      const checkAuth = async () => {
        console.log('appelle de checkauth dnas le frontend');
        const status = await IsAuthenticated();
        console.log('status =', status);
        setAuthStatus(status);
      };
      checkAuth();
    }, [isAuthenticated]);
    
    useEffect(() => {
      if (authStatus === false) {
        logout();
      } else if (authStatus === true) {
        login();
      }
    }, [authStatus, login, logout]);

    console.log('authstatus = ', authStatus);
    if (authStatus === false) {
        return children;
    }
    else if(authStatus === true) {
        return <Navigate to="/home" />;
    }
    return
}