import { ENVIRONMENT } from '../config/environment';

export const useCookie = () => {
  const parsedCookie = (value?: string) => {
    try {
      return JSON.parse(value!);
    } catch {
      return value;
    }
  };

  const createCookie = (
    value: string,
    name = ENVIRONMENT.APP.SESSION_COOKIE_NAME,
    date = new Date(new Date(Date.now() + 15 * 60 * 1000)),
  ) => {
    document.cookie = `${name}=${value}; expires=${date.toUTCString()} path=/; SameSite=none;secure`;
  };

  const getCookie = <T = any>(name: string) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((cookieValue) => cookieValue.startsWith(name));
    const cookieValue = cookie?.split('=')[1];

    const parsedCookieValue = parsedCookie(cookieValue);

    return {
      exist: !!cookieValue,
      value: parsedCookieValue as T,
    };
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
  };

  return {
    getCookie,
    createCookie,
    deleteCookie,
  };
};
