import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENVIRONMENT } from '../../config/environment';
import { useCacheContext } from '../../hooks/useCacheContext';

export const useSideMenu = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { hookCacheContextState } = useCacheContext();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  function handleLogout() {
    document.cookie = `${ENVIRONMENT.APP.SESSION_COOKIE_NAME}=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
    navigate('/login');
  }

  function handleGoHomePage() {
    navigate('/');
  }

  return {
    handleLogout,
    handleGoHomePage,
    modalOpen,
    toggleModal,
    hookCacheContextState,
  };
};
