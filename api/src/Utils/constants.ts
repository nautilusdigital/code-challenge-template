export const VALIDATION_MESSAGES = {
  CONTACT: {
    CREATE: {
      FIRST_NAME: {
        TYPE: 'First name must be a string',
        REQUIRED: 'First name is required',
      },
      LAST_NAME: {
        TYPE: 'Last name must be a string',
        REQUIRED: 'Last name is required',
      },
      AGE: {
        TYPE: 'Age must be a number',
        REQUIRED: 'Age is required',
      },
      CITY: {
        TYPE: 'City must be a string',
        REQUIRED: 'City is required',
      },
      REGION_ID: {
        TYPE: 'Region must be a string',
        REQUIRED: 'Region is required',
      },
      REGION_OTHER: {
        TYPE: 'Region other must be a string',
      },
      EMAIL: {
        TYPE: 'Email must be a string',
        VALID: 'Email must be valid',
        REQUIRED: 'Email is required',
      },
      PHONE_NUMBER: {
        TYPE: 'Phone number must be a string',
        VALID: 'Phone number must be valid',
        REQUIRED: 'Phone number is required',
      },
      CATEGORY: {
        TYPE: 'category number must be a string',
        REQUIRED: 'category is required',
      },
    },
    INDEX: {
      USER_ID: {
        TYPE: 'User ID must be a string',
        REQUIRED: 'User ID is required',
        VALID: 'User ID must be valid',
      },
    },
  },
  CASE: {
    INDEX: {
      FIRST_NAME: {
        TYPE: 'First name must be a string',
      },
      LAST_NAME: {
        TYPE: 'Last name must be a string',
      },
      PHONE_NUMBER: {
        TYPE: 'Phone number must be a string',
        VALID: 'Phone number must be valid',
      },
      CASE_ID: {
        TYPE: 'Case id must be a string',
        VALID: 'Case id must be valid',
      },
    },
  },
};
