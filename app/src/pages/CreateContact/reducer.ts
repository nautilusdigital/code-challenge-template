export const cacheInitialState = {
  category: {
    label: '',
    value: '',
  },
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  phone: '',
  city: '',
  region: {
    id: '',
    label: '',
    value: '',
  },
  regionOther: '',
  regionOptions: [
    {
      id: '',
      label: '',
      value: '',
    },
  ],
};

export type ReducerActionType = { type: 'updateCategory', data: typeof cacheInitialState['category'] } |
  { type: 'updateFirstName', data: typeof cacheInitialState['firstName'] } |
  { type: 'updateLastName', data: typeof cacheInitialState['lastName'] } |
  { type: 'updateAge', data: typeof cacheInitialState['age'] } |
  { type: 'updateEmail', data: typeof cacheInitialState['email'] } |
  { type: 'updatePhone', data: typeof cacheInitialState['phone'] } |
  { type: 'updateCity', data: typeof cacheInitialState['city'] } |
  { type: 'updateRegion', data: typeof cacheInitialState['region'] } |
  { type: 'updateRegionOptions', data: typeof cacheInitialState['regionOptions'] } |
  { type: 'updateRegionOther', data: typeof cacheInitialState['regionOther'] };

export const useReducerCreateContact = (state: any, { type, data }: ReducerActionType) => {
  switch (type) {
    case 'updateCategory':
      return {
        ...state,
        category: data,
      };
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
    case 'updateAge':
      return {
        ...state,
        age: data,
      };
    case 'updateEmail':
      return {
        ...state,
        email: data,
      };
    case 'updatePhone':
      return {
        ...state,
        phone: data,
      };
    case 'updateCity':
      return {
        ...state,
        city: data,
      };
    case 'updateRegion':
      return {
        ...state,
        region: data,
      };
    case 'updateRegionOptions':
      return {
        ...state,
        regionOptions: data,
      };
    case 'updateRegionOther':
      return {
        ...state,
        regionOther: data,
      };
    default:
      return { ...state };
  }
};
