import { ENVIRONMENT } from '../config/environment';

type UseFetchPropTypes = {
  method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'
  path: string
  body?: Record<string, any>
  headers?: Record<string, any>
}

export const useFetch = async ({
  method, path, body, headers,
}: UseFetchPropTypes) => {
  try {
    let newBody = body;

    if (method === 'GET' || method === 'DELETE') {
      newBody = undefined;
    }

    const res = await fetch(`${ENVIRONMENT.API.BASE_URL}/v1${path}`, {
      method,
      headers: new Headers({
        'content-type': 'application/json',
        accept: '*/*',
        ...headers,
      }),
      body: JSON.stringify(newBody),
    });

    let data: any = null;
    if (res.status === 200) data = await res.json();

    return {
      status: res.status,
      data,
    };
  } catch (error) {
    console.log('fetch Error', error);
  }
};
