const dateThreeMonthsAgo = () => {
  const today = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(today.getMonth() - 3);

  const todayFormat = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  const threeMonthsAgoFormat = `${threeMonthsAgo.getFullYear()}-${(threeMonthsAgo.getMonth() + 1).toString().padStart(2, '0')}-${threeMonthsAgo.getDate().toString().padStart(2, '0')}`;
  return {
    todayFormat,
    threeMonthsAgoFormat,
  };
};

export const reportCacheInitialState = {
  isOpen: false,
  startDate: dateThreeMonthsAgo().threeMonthsAgoFormat,
  endDate: dateThreeMonthsAgo().todayFormat,
  regionsId: '',
  regions: [
    {
      id: '',
      value: '',
    },
  ],
};

export type ReducerActionType = { type: 'updateStartDate', data: typeof reportCacheInitialState['startDate'] } |
  { type: 'updateEndDate', data: typeof reportCacheInitialState['endDate'] } |
  { type: 'updateIsOpen', data: typeof reportCacheInitialState['isOpen'] } |
  { type: 'updateRegionsId', data: typeof reportCacheInitialState['regionsId'] } |
  { type: 'updateRegions', data: typeof reportCacheInitialState['regions'] };

export const useReducerReport = (state: any, { type, data }: ReducerActionType) => {
  switch (type) {
    case 'updateIsOpen':
      if (data === false) {
        return {
          ...state,
          isOpen: data,
          startDate: dateThreeMonthsAgo().threeMonthsAgoFormat,
          endDate: dateThreeMonthsAgo().todayFormat,
          regionsId: '',
        };
      }
      return {
        ...state,
        isOpen: data,
      };
    case 'updateStartDate':
      return {
        ...state,
        startDate: data,
      };
    case 'updateEndDate':
      return {
        ...state,
        endDate: data,
      };
    case 'updateRegionsId':
      return {
        ...state,
        regionsId: data,
      };
    case 'updateRegions':
      return {
        ...state,
        regions: data,
      };
    default:
      return { ...state };
  }
};
