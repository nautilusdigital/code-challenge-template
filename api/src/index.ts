import server from './Main/server';
import { envVariables } from './Config';

const { log } = console;

server.listen(envVariables.api.port, async () => {
  log(`
  ⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢀⣠⣶⣿⠿⠛⠛⢿⣷⣦⣄⡀⠀⠀⠀
  ⠀⠀⠀⠻⠟⢋⣡⣴⣾⣷⣦⣌⠙⠻⣿⣶⠀⠀ ${'Convergence Concepts'}
  ⠀⢸⣿⡆⢠⣉⠛⢉⣠⣄⡉⠻⣿⡆⢸⣿⠀⠀ Server listen on port: ${envVariables.api.port}
  ⠀⢸⣿⡇⢸⣿⠀⣿⣿⣿⣷⠀⣿⡇⢸⣿⠀⠀ Project: ${envVariables.api.project}
  ⠀⢸⣿⡇⠸⣿⣦⣈⠙⠋⣡⣤⡉⠃⢸⣿⠀⠀
  ⠀⠘⢿⣿⣦⣄⡙⠻⢿⡿⠟⢉⣠⣶⣦⠀⠀⠀ Environment: ${envVariables.api.environment}
  ⠀⠀⠀⠈⠙⠻⣿⣷⣤⣴⣾⡿⠟⠋⠁⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀
  `);
});
