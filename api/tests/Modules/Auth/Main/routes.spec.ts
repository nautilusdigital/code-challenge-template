/* eslint-disable comma-dangle */
/* eslint-disable import/first */
import request from 'supertest';
import {
  describe, it, expect, beforeAll, jest,
} from '@jest/globals';

const authRepositorySpy = jest.fn();
const bcryptSpy = jest.fn();
const jwtSpy = jest.fn();

import server from '../../../../src/Main/server';
import { ERROR_CODES, VALIDATION_MESSAGES } from '../../../../src/Utils';

jest.mock('bcrypt', () => ({
  compare: bcryptSpy,
}));
jest.mock('jsonwebtoken', () => ({
  sign: jwtSpy
}));
jest.mock('../../../../src/Modules/Auth/Infra/DB/Prisma/repository', () => ({
  AuthPrismaRepository: jest.fn().mockReturnValue({
    authenticate: authRepositorySpy,
  }),
}));

describe('Auth routes', () => {
  describe('POST /v1/auth', () => {
    const authData = {
      email: 'any@email.com',
      password: 'any-password',
    };

    const authRepositoryData = {
      id: 'any-id',
      email: authData.email,
      name: 'any-name',
      password: 'any-password',
      userType: 'any-user-type',
      createdAt: '2024-01-16'
    };

    const accessToken = 'any-access-token';

    const route = '/v1/auth';
    const validationErrorName = 'ValidationError';
    const validationErrorCode = 'E04000';

    beforeAll(() => {
      bcryptSpy.mockResolvedValue(true as never);
      jwtSpy.mockReturnValue(accessToken);
      authRepositorySpy.mockResolvedValue(authRepositoryData as never);
    });

    it('should return 204 with empty body', async () => {
      const { status, body } = await request(server)
        .post(route)
        .send(authData);

      expect(status).toBe(200);
      expect(body).toEqual({
        user: {
          id: authRepositoryData.id,
          email: authRepositoryData.email,
          name: authRepositoryData.name,
          userType: authRepositoryData.userType,
          createdAt: authRepositoryData.createdAt,
        },
        tokens: {
          accessToken,
        }
      });
    });

    it('should return 400 if user does not exist', async () => {
      authRepositorySpy.mockResolvedValue(undefined as never);

      const { status, body } = await request(server)
        .post(route)
        .send(authData);

      expect(status).toBe(400);
      expect(body).toEqual({
        name: 'BadRequestError',
        code: ERROR_CODES.BAD_REQUEST.LOGIN,
      });
    });

    it('should return 400 if password does not match', async () => {
      bcryptSpy.mockResolvedValue(false as never);

      const { status, body } = await request(server)
        .post(route)
        .send(authData);

      expect(status).toBe(400);
      expect(body).toEqual({
        name: 'BadRequestError',
        code: ERROR_CODES.BAD_REQUEST.LOGIN,
      });
    });

    it('should return 400 if validation fails', async () => {
      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...authData,
            email: '',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'email',
              message: VALIDATION_MESSAGES.AUTH.EMAIL.REQUIRED,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...authData,
            email: 1,
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'email',
              message: VALIDATION_MESSAGES.AUTH.EMAIL.TYPE,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...authData,
            email: 'any-invalid-email',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'email',
              message: VALIDATION_MESSAGES.AUTH.EMAIL.VALID,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...authData,
            password: '',
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'password',
              message: VALIDATION_MESSAGES.AUTH.PASSWORD.REQUIRED,
            },
          ],
        });
      }

      {
        const { status, body } = await request(server)
          .post(route)
          .send({
            ...authData,
            password: 1,
          });

        expect(status).toBe(400);
        expect(body).toEqual({
          name: validationErrorName,
          code: validationErrorCode,
          errorFields: [
            {
              path: 'password',
              message: VALIDATION_MESSAGES.AUTH.PASSWORD.TYPE,
            },
          ],
        });
      }
    });
  });
});
