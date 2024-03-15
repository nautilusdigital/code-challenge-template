export type CaseAttachmentUploadInputType = {
  files: {
    buffer: Buffer
    extension: string
  }[]
}

export interface ICaseAttachmentUploadRepository {
  store(data: CaseAttachmentUploadInputType): Promise<string[]>
}
