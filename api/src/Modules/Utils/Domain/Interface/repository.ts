export type UtilsRepositoryOutputType = {
  regions: {
    id: string
    value: string
  }[]
  statuses: {
    id: string
    value: string
  }[]
}

export interface IUtilsRepository {
  index(): Promise<UtilsRepositoryOutputType>
}
