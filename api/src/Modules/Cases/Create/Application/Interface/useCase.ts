export type CaseCreateUseCaseInputType = {
  clientId: string
  callerId: string
  userId: string
  issueType: string
  regionId: string
  fileNames: Array<string>
  notes: string
  reviewDate: string
}

export type CaseCreateUseCaseOutputType = {
  id: string
}

export interface ICaseCreateUseCase {
  execute(data: CaseCreateUseCaseInputType): Promise<CaseCreateUseCaseOutputType>
}
