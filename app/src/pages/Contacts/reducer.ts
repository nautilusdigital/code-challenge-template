export const cacheInitialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  contacts: [],
};

export type ReducerActionType = { type: 'updateFirstName', data: typeof cacheInitialState['firstName'] } |
  { type: 'updateLastName', data: typeof cacheInitialState['lastName'] } |
  { type: 'updatePhoneNumber', data: typeof cacheInitialState['phoneNumber'] } |
  { type: 'updateContacts', data: typeof cacheInitialState['contacts'] };

export const useReducerContact = (state: any, { type, data }: ReducerActionType) => {
  switch (type) {
    case 'updateFirstName':
      return {
        ...state,
        firstName: data,
      };
    case 'updateLastName':
      return {
        ...state,
        lastName: data,
      };
    case 'updatePhoneNumber':
      return {
        ...state,
        phoneNumber: data,
      };
    case 'updateContacts':
      return {
        ...state,
        contacts: data,
      };
    default:
      return { ...state };
  }
};
