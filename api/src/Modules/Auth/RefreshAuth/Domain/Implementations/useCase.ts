/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { sign } from 'jsonwebtoken';
import { IRefreshAuthRepository } from '../Interfaces';
import { IRefreshAuthUseCase, RefreshAuthUseCaseInputType, RefreshAuthUseCaseOutputType } from '../../Application/Interfaces';
import { envVariables } from '../../../../../Config';

type AuthRefreshUseCaseConstructorType = {
  repository: IRefreshAuthRepository;
}

/**
 * This class represents a use case for refreshing authentication.
 * @extends {AuthUseCaseTemplate}
 * @implements {IAuthRefreshUseCase}
 */
export class AuthRefreshUseCase implements IRefreshAuthUseCase {
  protected repository: IRefreshAuthRepository;

  /**
   * Creates a new instance of AuthRefreshUseCase.
   * @param {AuthRefreshUseCaseConstructorType} param0 - An object containing the identity provider, authentication repository, and token validator.
   */
  constructor({ repository }: AuthRefreshUseCaseConstructorType) {
    this.repository = repository;
  }

  /**
   * Executes the use case, which refreshes the authentication.
   * @param {AuthRefreshUseCaseInputType} param0 - An object containing the refresh token and subject.
   * @returns {Promise<AuthTemplateUseCaseReturnType>} A promise that resolves to the user and tokens.
   * @throws {BadRequestError} If the identity provider returns a NOT_AUTHORIZED error.
   */
  async execute({ id }: RefreshAuthUseCaseInputType): Promise<RefreshAuthUseCaseOutputType> {
    const user = await this.repository.getOneById({ id });
    return {
      user,
      tokens: {
        accessToken: sign({ sub: user.id, userType: user.userType }, envVariables.api.appSecret),
      },
    };
  }
}
