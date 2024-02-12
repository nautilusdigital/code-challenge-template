export const ENVIRONMENT = {
  APP: {
    SESSION_COOKIE_NAME: process.env.REACT_APP_SESSION_COOKIE_NAME as string,
    GOOGLE_MAP_API: process.env.REACT_APP_GOOGLE_MAP as string,
    GOOGLE_PLACE_API: process.env.REACT_APP_GOOGLE_PLACE as string,
  },
  API: {
    BASE_URL: process.env.REACT_APP_BASE_URL as string,
  },
};
