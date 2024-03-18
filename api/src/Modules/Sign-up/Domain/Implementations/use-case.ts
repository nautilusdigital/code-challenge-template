import { hash } from 'bcrypt';

import { ISignUpUseCase, SignUpUseCaseInputType } from '../../Application/Interfaces';
import { ISignUpRepository } from '../Interfaces';

type SignUpUseCaseConstructorType = {
  repository: ISignUpRepository;
}

export class SignUpUseCase implements ISignUpUseCase {
  private readonly repository: ISignUpRepository;

  constructor({ repository }: SignUpUseCaseConstructorType) {
    this.repository = repository;
  }

  async execute(data: SignUpUseCaseInputType): Promise<void> {
    const passwordHash = await hash(data.password, 10);

    await this.repository.signUp({
      ...data,
      password: passwordHash,
    });
  }
}
