export type GetSelectOptionsOutputType = {
  exampleUtils: [
    {
      id: string,
      value: string;
    }
  ]
};

export interface IGetSelectOptionsUseCase {
  execute(): Promise<GetSelectOptionsOutputType>;
}
