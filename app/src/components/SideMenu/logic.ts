import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENVIRONMENT } from '../../config/environment';
import { useFetch } from '../../hooks';
import { useCacheContext } from '../../hooks/useCacheContext';

export const useSideMenu = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Record<string, any>[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newNotification, setNewNotification] = useState(false);
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

  const getNotifications = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const notf = await useFetch({
      method: 'GET',
      path: '/notifications',
      headers: {
        authorization: `Bearer ${hookCacheContextState.tokens.accessToken}`,
      },
    });

    if (notf?.status === 200) {
      setNotifications(notf.data);
      if (notf.data.filter((item: any) => item.read === 'true').length > 0) {
        console.log('test');
        setNewNotification(true);
      }
    }
  };

  const updateNofication = async (id: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useFetch({
      method: 'PATCH',
      path: `/notifications/${id}`,
      headers: {
        authorization: `Bearer ${hookCacheContextState.tokens.accessToken}`,
      },
    });

    getNotifications();
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return {
    handleLogout,
    handleGoHomePage,
    notifications,
    modalOpen,
    toggleModal,
    newNotification,
    updateNofication,
    hookCacheContextState,
  };
};
