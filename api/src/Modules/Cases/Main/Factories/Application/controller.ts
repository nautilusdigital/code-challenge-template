import { CaseIndexController } from '../../../Index/Application/Implementations';
import { makeCaseIndexUseCase } from '../Domain/useCase';
import { makCaseIndexYupValidator } from './Validation/Yup/validator';

export const makeCaseIndexController = () => new CaseIndexController({ useCase: makeCaseIndexUseCase(), validator: makCaseIndexYupValidator() });
