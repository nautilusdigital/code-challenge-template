/* eslint-disable import/first */
import request from 'supertest';
import {
  describe, it, expect, beforeAll, jest,
} from '@jest/globals';
import server from '../../../../src/Main/server';
import { VALIDATION_MESSAGES } from '../../../../src/Utils';

describe('Sign up routes', () => {
  const signUpRepositorySpy = jest.fn();

  jest.mock('../../../../src/Modules/Sign-up/Infra/DB/Prisma/repository', () => ({
    SignUpRepository: jest.fn().mockReturnValue({
      signUp: signUpRepositorySpy,
    }),
  }));

  describe('POST /v1/signup', () => {
    const signUpData = {
      firstName: 'any-first-name',
      lastName: 'any-last-name',
      email: 'any@email.com',
      password: 'any-password',
      userType: 'user',
    };

    const route = '/v1/signup';
    const validationErrorName = 'ValidationError';
    const validationErrorCode = 'E04000';

    beforeAll(() => {
      signUpRepositorySpy.mockResolvedValue(undefined as never);
    });

    it('should return 204 with empty body', async () => {
      const { status, body } = await request(server)
        .post(route)
        .send(signUpData);

      expect(status).toBe(204);
      expect(body).toEqual({});
    });

    it('should return 400 if validation fails', async () => {
      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            firstName: '',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'firstName',
              message: VALIDATION_MESSAGES.SIGN_UP.FIRST_NAME.REQUIRED,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            firstName: 1,
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'firstName',
              message: VALIDATION_MESSAGES.SIGN_UP.FIRST_NAME.TYPE,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            lastName: '',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'lastName',
              message: VALIDATION_MESSAGES.SIGN_UP.LAST_NAME.REQUIRED,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            lastName: 1,
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'lastName',
              message: VALIDATION_MESSAGES.SIGN_UP.LAST_NAME.TYPE,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            email: '',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'email',
              message: VALIDATION_MESSAGES.SIGN_UP.EMAIL.REQUIRED,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            email: 1,
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'email',
              message: VALIDATION_MESSAGES.SIGN_UP.EMAIL.TYPE,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            email: 'any-invalid-email',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'email',
              message: VALIDATION_MESSAGES.SIGN_UP.EMAIL.VALID,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            password: '',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'password',
              message: VALIDATION_MESSAGES.SIGN_UP.PASSWORD.REQUIRED,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            password: 1,
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'password',
              message: VALIDATION_MESSAGES.SIGN_UP.PASSWORD.TYPE,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            userType: '',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'userType',
              message: VALIDATION_MESSAGES.SIGN_UP.USER_TYPE.REQUIRED,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...signUpData,
            userType: 1,
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'userType',
              message: VALIDATION_MESSAGES.SIGN_UP.USER_TYPE.TYPE,
            },
          ],
        });
      }
    });
  });
});
