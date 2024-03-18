export const VALIDATION_MESSAGES = {
  SIGN_UP: {
    FIRST_NAME: {
      TYPE: 'First name must be a string',
      REQUIRED: 'First name is required',
    },
    LAST_NAME: {
      TYPE: 'Last name must be a string',
      REQUIRED: 'Last name is required',
    },
    EMAIL: {
      TYPE: 'Email must be a string',
      VALID: 'Email must be valid',
      REQUIRED: 'Email is required',
    },
    PASSWORD: {
      TYPE: 'Password must be a string',
      REQUIRED: 'Password is required',
    },
  },
  AUTH: {
    EMAIL: {
      TYPE: 'Email must be a string',
      VALID: 'Email must be valid',
      REQUIRED: 'Email is required',
    },
    PASSWORD: {
      TYPE: 'Password must be a string',
      REQUIRED: 'Password is required',
    },
    TOKEN: {
      TYPE: 'Authorization token must be a string',
      REQUIRED: 'Authorization token is required',
    },
  },
};
