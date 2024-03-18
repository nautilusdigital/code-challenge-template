export type GetSelectOptionsOutputType = {
  exampleUtils: [
    {
      id: string,
      value: string;
    }
  ];
};

export interface IGetSelectOptionsRepository {
  get(): Promise<GetSelectOptionsOutputType>;
}
