export type CaseCreateRepositoryInputType = {
  clientId: string
  callerId: string
  userId: string
  issueType: string
  regionId: string
  fileNames: Array<string>
  notes: string
  reviewDate: string
}

export type CaseCreateRepositoryOutputType = {
  id: string
}

export interface ICaseCreateRepository {
  create(data: CaseCreateRepositoryInputType): Promise<CaseCreateRepositoryOutputType>
}
