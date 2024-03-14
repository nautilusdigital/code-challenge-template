export type DBURIBuilderType = {
  engine: 'postgresql' | 'mysql';
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  schema: string;
};

export const DBURIBuilder = ({
  engine, host, port, database, username, password, schema,
}: DBURIBuilderType): string => {
  // Encode username and password to handle special characters
  const encodedUsername = encodeURIComponent(username);
  const encodedPassword = encodeURIComponent(password);

  return `${engine}://${encodedUsername}:${encodedPassword}@${host}:${port}/${database}?schema=${schema}&connection_limit=5`;
};
