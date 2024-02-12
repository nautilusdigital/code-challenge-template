import server from "./server";

const api = server.listen(8080, () => console.log('server running'))

export default { api }