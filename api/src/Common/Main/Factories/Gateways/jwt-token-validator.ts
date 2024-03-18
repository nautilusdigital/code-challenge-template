import { JwtTokenValidator } from '../../../Infra/Gateways';

export const makeJwtTokenValidatorFactory = () => new JwtTokenValidator();
