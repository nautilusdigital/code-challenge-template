export type ReportInputType = {
  startDate: string
  endDate: string
  regionsId?: string
};

export type ReportOutputType = {
  region: string
  open: number
  closed: number
};

export interface IReportUseCase {
  execute(data: ReportInputType): Promise<ReportOutputType[]>;
}
