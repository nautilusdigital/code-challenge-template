export const useLoginReducer = (state: any, { data }: Record<string, any>) => ({
  ...state,
  ...data,
});
