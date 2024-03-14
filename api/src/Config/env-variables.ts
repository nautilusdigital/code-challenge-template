export const envVariables = {
  api: {
    port: process.env.PORT as string,
    project: process.env.PROJECT as string,
    environment: process.env.ENVIRONMENT as string,
    appSecret: process.env.APP_SECRET as string,
  },
  database: {
    engine: process.env.DATABASE_ENGINE as string,
    host: process.env.DATABASE_HOST as string,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_DATABASE as string,
    username: process.env.DATABASE_USERNAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    schema: process.env.DATABASE_SCHEMA as string,
  },
};
