import { CaseCreateController } from '../../../Create/Application/Implentations';
import { makeCaseCreateUseCase } from '../Domain/useCase';
import { makeCaseCreateYupValidator } from './Validation/Yup/validator';

export const makeCaseCreateController = () => new CaseCreateController({ useCase: makeCaseCreateUseCase(), validator: makeCaseCreateYupValidator() });
