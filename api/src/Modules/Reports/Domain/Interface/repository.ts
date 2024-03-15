export type ReportRepositoryInputType = {
  startDate: string
  endDate: string
  regionsId?: string
}

export type ReportRepositoryOutputType = {
  region: string
  open: number
  closed: number
}

export interface IReportRepository {
  index(data: ReportRepositoryInputType): Promise<ReportRepositoryOutputType[]>
}
