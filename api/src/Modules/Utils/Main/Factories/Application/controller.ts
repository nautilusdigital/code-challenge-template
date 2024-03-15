import { UtilsController } from '../../../Application/Implementations';
import { makeUtilsUseCase } from '../Domain/useCase';

export const makeUtilsController = () => new UtilsController({ useCase: makeUtilsUseCase() });
