export const cacheInitialState = {
  caller: {
    id: '',
    label: '',
    value: '',
  },
  client: {
    id: '',
    label: '',
    value: '',
  },
  contactOptions: [
    {
      id: '',
      name: '',
    },
  ],
  issueType: {
    id: '',
    label: '',
    value: '',
  },
  region: {
    id: '',
    label: '',
    value: '',
  },
  regionOptions: [{
    id: '',
    label: '',
    value: '',
  }],
  statusOptions: [{
    id: '',
    label: '',
    value: '',
  }],
  attachments: undefined,
  attachmentNames: [],
  notes: '',
  reviewDate: '',
};

export type ReducerActionType = { type: 'updateCaller', data: typeof cacheInitialState['caller'] } |
  { type: 'updateClient', data: typeof cacheInitialState['client'] } |
  { type: 'updateContactOptions', data: typeof cacheInitialState['contactOptions'] } |
  { type: 'updateIssueType', data: typeof cacheInitialState['issueType'] } |
  { type: 'updateRegion', data: typeof cacheInitialState['region'] } |
  { type: 'updateRegionOptions', data: typeof cacheInitialState['regionOptions'] } |
  { type: 'updateAttachments', data: FormData } |
  { type: 'updateAttachmentNames', data: string[] } |
  { type: 'updateNotes', data: typeof cacheInitialState['notes'] } |
  { type: 'updateReviewDate', data: typeof cacheInitialState['reviewDate'] };

export const useReducerCreateCase = (state: any, { type, data }: ReducerActionType) => {
  switch (type) {
    case 'updateCaller':
      return {
        ...state,
        caller: data,
      };
    case 'updateClient':
      return {
        ...state,
        client: data,
      };
    case 'updateContactOptions':
      return {
        ...state,
        contactOptions: data,
      };
    case 'updateIssueType':
      return {
        ...state,
        issueType: data,
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
    case 'updateAttachments':
      return {
        ...state,
        attachments: data,
      };
    case 'updateAttachmentNames':
      return {
        ...state,
        attachmentNames: data,
      };
    case 'updateNotes':
      return {
        ...state,
        notes: data,
      };
    case 'updateReviewDate':
      return {
        ...state,
        reviewDate: data,
      };
    default:
      return state;
  }
};
