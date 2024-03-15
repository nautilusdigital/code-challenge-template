export type UtilsOutputType = {
  regions: {
    id: string
    value: string
  }[]
  statuses: {
    id: string
    value: string
  }[]
};

export interface IUtilsUseCase {
  execute(): Promise<UtilsOutputType>;
}
