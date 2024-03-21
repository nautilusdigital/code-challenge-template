import { MockProxy, mock } from 'jest-mock-extended';
import bcrypt from 'bcrypt';
import { SignUpUseCase } from '../../../../src/Modules/Sign-up/Domain/Implementations';
import { ISignUpRepository } from '../../../../src/Modules/Sign-up/Domain/Interfaces';

describe('SignUpUseCase', () => {
  let signUpRepository: MockProxy<ISignUpRepository>;
  let sut: SignUpUseCase;

  const inputData = {
    firstName: 'any_first_name',
    lastName: 'any_last_name',
    email: 'any_email',
    password: 'any_password',
    userType: 'user',
  };

  beforeAll(() => {
    signUpRepository = mock();
    signUpRepository.signUp.mockResolvedValue({} as never);

    jest.spyOn(bcrypt, 'hash').mockResolvedValue('hash_password' as never);
  });

  beforeEach(() => {
    sut = new SignUpUseCase({ repository: signUpRepository });
  });

  it('should call authRepository with correct params', async () => {
    await sut.execute(inputData);

    expect(signUpRepository.signUp).toHaveBeenCalledWith({ ...inputData, password: 'hash_password' });
    expect(signUpRepository.signUp).toHaveBeenCalledTimes(1);
  });

  it('should return correct data', async () => {
    const result = await sut.execute(inputData);

    expect(result).toEqual(undefined);
  });
});
