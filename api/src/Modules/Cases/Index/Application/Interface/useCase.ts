export type CaseIndexInputType = {
  firstName?: string
  lastName?: string
  phone?: string
  caseId?: string
};

export type CaseIndexOutputType = {
  id: string,
  client: string,
  issueType: string,
  attachment: string,
  notes: string,
  nextReviewDate: string,
  createdBy: string,
  status: string
};

export interface ICaseIndexUseCase {
  execute(data: CaseIndexInputType): Promise<CaseIndexOutputType[]>;
}
