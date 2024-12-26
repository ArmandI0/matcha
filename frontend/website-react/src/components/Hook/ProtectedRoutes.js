import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

async function IsAuthenticated() {
    try {
        const response = await fetch('/auth/authenticated', {
            method: 'GET',
        });
        if (response.ok) {
            const res = await response.json();
            console.log(res);
            if (res.auth === true) {
                return true
            }
            else {
                return false
            }
        } else {
            console.error('Erreur lors de l\'envoi du message');
            return false;
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        return false;
    }
}

async function ProfileIsComplete() {
  try {
      const response = await fetch('/user/user-profile-status', {
          method: 'GET',
      });
      if (response.ok) {
          const res = await response.json();
          if (res.status === true) {
            return true
          }
          else {
              return false
          }
      } else {
          console.error('Erreur lors de l\'envoi du message');
          return false;
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      return false;
  }
};

export function AuthenticatedRoutes({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const status = await IsAuthenticated();
        setIsAuth(status);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return null;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export function UnauthenticatedRoutes({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const status = await IsAuthenticated();
        setIsAuth(status);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return null;
  }

  if (isAuth) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export function IncompleteProfileRoutes({ children }) {
  const [incompleteProfile, setIncompleteProfile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIfProfileIsIncomplete = async () => {
      try {
        const status = await ProfileIsComplete();
        setIncompleteProfile(status);
      } finally {
        setLoading(false);
      }
    };
    checkIfProfileIsIncomplete();
  }, []);

  if (loading) {
    return null;
  }
  if (isAuth) {
    return <Navigate to="/profileCompletion" replace />;
  }
}