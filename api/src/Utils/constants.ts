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
    CREATE: {
      CLIENT_ID: {
        TYPE: 'Client ID must be a string',
        REQUIRED: 'Client ID is required',
      },
      CALLER_ID: {
        TYPE: 'Caller ID must be a string',
        REQUIRED: 'Caller ID is required',
      },
      USER_ID: {
        TYPE: 'User ID must be a string',
        REQUIRED: 'User ID is required',
      },
      ISSUE_TYPE: {
        TYPE: 'Issue Type must be a string',
        REQUIRED: 'Issue Type is required',
      },
      REGION_ID: {
        TYPE: 'Region ID must be a string',
        REQUIRED: 'Region is required',
      },
      FILE_NAMES: {
        TYPE: 'File names must be an array',
        REQUIRED: 'File names is required',
      },
      NOTES: {
        TYPE: 'Notes must be a string',
        REQUIRED: 'Notes is required',
      },
      REVIEW_DATE: {
        TYPE: 'Review date must be a string',
        REQUIRED: 'Review date is required',
      },
    },
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
  REPORT: {
    REGION_ID: {
      TYPE: 'Region id must be a string',
      VALID: 'Region id must be valid uuid',
    },
    startDate: {
      TYPE: 'Start date must be a string',
      REQUIRED: 'Start date id is required',
    },
    endDate: {
      TYPE: 'End date must be a string',
      REQUIRED: 'End date id is required',
    },
  },
};
