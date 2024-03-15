export type CaseIndexRepositoryInputType = {
  firstName?: string
  lastName?: string
  phone?: string
  caseId?: string
}

export type CaseIndexRepositoryOutputType = {
  id: string,
  client: string,
  issueType: string,
  attachment: string,
  notes: string,
  nextReviewDate: string,
  createdBy: string,
  status: string
}

export interface ICaseIndexRepository {
  index(data: CaseIndexRepositoryInputType): Promise<CaseIndexRepositoryOutputType[]>
}
