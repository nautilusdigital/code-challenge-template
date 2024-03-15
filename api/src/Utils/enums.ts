export const ERROR_CODES = {
  UNKNOWN: 'E00000',
  NOT_FOUND: {
    USER: 'E00100',
  },
  BAD_REQUEST: {
    LOGIN: 'E00200',
  },
  DATABASE: 'E02000',
  VALIDATION: 'E04000',
  TOKEN_VALIDATION: 'E05000',
  FILE_UPLOAD: 'E06000',
};

export const ERROR_MESSAGES = {
  BAD_REQUEST: {
    LOGIN: 'Invalid email or password',
  },
  NOT_FOUND: {
    USER: 'User not found',
  },
  TOKEN_VALIDATION: {
    INVALID_TOKEN_TYPE: 'Invalid token type',
    INVALID_TOKEN_FORMAT: 'Invalid token format',
  },
};
