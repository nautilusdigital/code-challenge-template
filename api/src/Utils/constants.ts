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
    ADDRESS: {
      TYPE: 'Address must be a string',
      REQUIRED: 'Address is required',
    },
    UNIT_NUMBER: {
      TYPE: 'Unit number must be a string',
    },
    POSTAL_CODE: {
      TYPE: 'Postal code must be a string',
      REQUIRED: 'Postal code is required',
    },
    PHONE_NUMBER: {
      TYPE: 'Phone number must be a string',
      VALID: 'Phone number must be valid',
      REQUIRED: 'Phone number is required',
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
  STR_APPLICATION: {
    CREATE: {
      LATITUDE: {
        TYPE: 'Latitude must be a number',
        REQUIRED: 'Latitude is required',
      },
      LONGITUDE: {
        TYPE: 'Longitude must be a number',
        REQUIRED: 'Longitude is required',
      },
      ADDRESS: {
        TYPE: 'Address must be a string',
        REQUIRED: 'Address is required',
      },
      UNIT_NUMBER: {
        TYPE: 'Unit number must be a string',
      },
      CITY: {
        TYPE: 'City must be a string',
        REQUIRED: 'City is required',
      },
      PROVINCE: {
        TYPE: 'Province must be a string',
        REQUIRED: 'Province is required',
      },
      POSTAL_CODE: {
        TYPE: 'Postal code must be a string',
        REQUIRED: 'Postal code is required',
      },
      ZONING_TYPE: {
        TYPE: 'Zoning type must be a string',
        REQUIRED: 'Zoning type is required',
      },
      ZONING_TYPE_ID: {
        TYPE: 'Zoning type id must be a string',
        REQUIRED: 'Zoning type id is required',
        VALID: 'Zoning type id must be valid uuid',
      },
      SQUARE_FOOTAGE: {
        TYPE: 'Square footage must be a number',
        REQUIRED: 'Square footage is required',
      },
      AFFILIATE: {
        TYPE: 'Affiliate must be a string',
        REQUIRED: 'Affiliate is required',
      },
      AFFILIATE_ID: {
        TYPE: 'Affiliate id must be a string',
        REQUIRED: 'Affiliate id is required',
        VALID: 'Affiliate id must be valid uuid',
      },
      PRIMARY_RESIDENCE: {
        TYPE: 'Primary residence must be a boolean',
        REQUIRED: 'Primary residence is required',
      },
      USER_ID: {
        TYPE: 'User id must be a string',
        REQUIRED: 'User id is required',
        VALID: 'User id must be valid uuid',
      },
    },
    UPDATE: {
      ID: {
        TYPE: 'Id must be a string',
        REQUIRED: 'Id is required',
        VALID: 'Id must be valid uuid',
      },
      LATITUDE: {
        TYPE: 'Latitude must be a number',
        REQUIRED: 'Latitude is required',
      },
      LONGITUDE: {
        TYPE: 'Longitude must be a number',
        REQUIRED: 'Longitude is required',
      },
      ADDRESS: {
        TYPE: 'Address must be a string',
        REQUIRED: 'Address is required',
      },
      UNIT_NUMBER: {
        TYPE: 'Unit number must be a string',
      },
      CITY: {
        TYPE: 'City must be a string',
        REQUIRED: 'City is required',
      },
      PROVINCE: {
        TYPE: 'Province must be a string',
        REQUIRED: 'Province is required',
      },
      POSTAL_CODE: {
        TYPE: 'Postal code must be a string',
        REQUIRED: 'Postal code is required',
      },
      ZONING_TYPE: {
        TYPE: 'Zoning type must be a string',
        REQUIRED: 'Zoning type is required',
      },
      ZONING_TYPE_ID: {
        TYPE: 'Zoning type id must be a string',
        REQUIRED: 'Zoning type id is required',
        VALID: 'Zoning type id must be valid uuid',
      },
      SQUARE_FOOTAGE: {
        TYPE: 'Square footage must be a number',
        REQUIRED: 'Square footage is required',
      },
      AFFILIATE: {
        TYPE: 'Affiliate must be a string',
        REQUIRED: 'Affiliate is required',
      },
      AFFILIATE_ID: {
        TYPE: 'Affiliate id must be a string',
        REQUIRED: 'Affiliate id is required',
        VALID: 'Affiliate id must be valid uuid',
      },
      STATUS: {
        TYPE: 'Status must be a string',
        REQUIRED: 'Status is required',
      },
      STATUS_ID: {
        TYPE: 'Status id must be a string',
        REQUIRED: 'Status id is required',
        VALID: 'Status id must be valid uuid',
      },
      PRIMARY_RESIDENCE: {
        TYPE: 'Primary residence must be a boolean',
        REQUIRED: 'Primary residence is required',
      },
      USER_ID: {
        TYPE: 'User id must be a string',
        REQUIRED: 'User id is required',
        VALID: 'User id must be valid uuid',
      },
    },
    LIST: {
      USER_ID: {
        TYPE: 'User ID must be a string',
        REQUIRED: 'User ID is required',
        VALID: 'User ID must be valid',
      },
      CENTER_LAT: {
        TYPE: 'Center latitude must be a string',
        REQUIRED: 'Center latitude is required',
      },
      CENTER_LON: {
        TYPE: 'Center longitude must be a string',
        REQUIRED: 'Center longitude is required',
      },
      RADIUS: {
        TYPE: 'Radius must be a string',
        REQUIRED: 'Radius is required',
      },
    },
    GET: {
      USER_ID: {
        TYPE: 'User ID must be a string',
        REQUIRED: 'User ID is required',
        VALID: 'User ID must be valid',
      },
      APPLICATION_ID: {
        TYPE: 'Application ID must be a string',
        REQUIRED: 'Application ID is required',
        VALID: 'Application ID must be valid',
      },
    },
  },
  STR_APPLICATION_LOGS: {
    LIST: {
      APPLICATION_ID: {
        TYPE: 'Application ID must be a string',
        REQUIRED: 'Application ID is required',
        VALID: 'Application ID must be valid',
      },
    },
  },
  NOTIFICATION: {
    UPDATE: {
      ID: {
        TYPE: 'Id must be a string',
        REQUIRED: 'Id is required',
        VALID: 'Id must be valid uuid',
      },
      USER_ID: {
        TYPE: 'User id must be a string',
        REQUIRED: 'User id is required',
        VALID: 'User id must be valid uuid',
      },
    },
  },
};
