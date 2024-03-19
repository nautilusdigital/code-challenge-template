import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { BadRequestError } from '../../../../../Common/Domain/Errors';
import { AuthUseCaseInputType, AuthUseCaseOutputType, IAuthUseCase } from '../../Application/Interfaces';
import { IAuthRepository } from '../Interfaces';
import { envVariables } from '../../../../../Config';
import { ERROR_CODES, ERROR_MESSAGES } from '../../../../../Utils';

type AuthUseCaseConstructorType = {
  repository: IAuthRepository;
}

export class AuthUseCase implements IAuthUseCase {
  private readonly repository: IAuthRepository;

  constructor({ repository }: AuthUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute({ email, password }: AuthUseCaseInputType): Promise<AuthUseCaseOutputType> {
    const user = await this.repository.authenticate({ email });

    if (user === undefined) {
      throw new BadRequestError(ERROR_MESSAGES.BAD_REQUEST.LOGIN, ERROR_CODES.BAD_REQUEST.LOGIN);
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestError(ERROR_MESSAGES.BAD_REQUEST.LOGIN, ERROR_CODES.BAD_REQUEST.LOGIN);
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType,
        createdAt: user.createdAt,
      },
      tokens: {
        accessToken: sign({ sub: user.id, userType: user.userType }, envVariables.api.appSecret),
      },
    };
  }
}
