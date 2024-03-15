import { ReportController } from '../../../Application/Impementations';
import { makeReportUseCase } from '../Domain/useCase';
import { makeReportYupValidator } from './Validation/Yup/validator';

export const makeReportController = () => new ReportController({ useCase: makeReportUseCase(), validator: makeReportYupValidator() });
