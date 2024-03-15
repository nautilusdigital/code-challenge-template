import { CaseIndexController } from '../../../Index/Application/Implementations';
import { makeCaseIndexUseCase, makeCaseCreateUseCase } from '../Domain/useCase';
import { makCaseIndexYupValidator, makeCaseCreateYupValidator } from './Validation/Yup/validator';
import { CaseCreateController } from '../../../Create/Application/Implentations';

export const makeCaseIndexController = () => new CaseIndexController({ useCase: makeCaseIndexUseCase(), validator: makCaseIndexYupValidator() });
export const makeCaseCreateController = () => new CaseCreateController({ useCase: makeCaseCreateUseCase(), validator: makeCaseCreateYupValidator() });
