import { Controller } from '../../../../../../Common/Application/Controller/Implementations';
import { ICaseAttachmentUploadUseCase } from '../Interface';

type CaseAttachmentUploadControllerConstructorType = {
  useCase: ICaseAttachmentUploadUseCase
}

type RequestType = {
    files: {
      buffer: Buffer
      extension: string
    }[]
}

export class CaseAttachmentUploadController extends Controller {
  private useCase: ICaseAttachmentUploadUseCase;

  constructor({ useCase }: CaseAttachmentUploadControllerConstructorType) {
    super();

    this.useCase = useCase;
  }

  async perform(request: RequestType): Promise<unknown> {
    return this.useCase.execute({ files: request.files });
  }
}
