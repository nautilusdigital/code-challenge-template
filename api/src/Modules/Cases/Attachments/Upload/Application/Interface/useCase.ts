export type CaseAttachmentUploadInputType = {
  files: {
    buffer: Buffer
    extension: string
  }[]
}

export interface ICaseAttachmentUploadUseCase {
  execute(data: CaseAttachmentUploadInputType): Promise<string[]>
}
