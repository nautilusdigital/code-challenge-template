export const cacheInitialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  caseId: '',
  cases: [
    {
      id: '',
      client: '',
      issueType: '',
      notes: '',
      nextReviewDate: '',
      createdBy: '',
      status: '',
    },
  ],
};

export type ReducerActionType = { type: 'updateFirstName', data: typeof cacheInitialState['firstName'] } |
  { type: 'updateLastName', data: typeof cacheInitialState['lastName'] } |
  { type: 'updatePhoneNumber', data: typeof cacheInitialState['phoneNumber'] } |
  { type: 'updateCaseId', data: typeof cacheInitialState['caseId'] } |
  { type: 'updateCases', data: typeof cacheInitialState['cases'] };

export const useReducerCase = (state: any, { type, data }: ReducerActionType) => {
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
    case 'updateCaseId':
      return {
        ...state,
        caseId: data,
      };
    case 'updateCases':
      return {
        ...state,
        cases: data,
      };
    default:
      return { ...state };
  }
};
