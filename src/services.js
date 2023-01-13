function helloWorld() {
  return { message: 'Hello world' };
}

function serverStatus() {
  return { status: 200, message: 'All systems running' };
}

module.exports = {
  helloWorld,
  serverStatus,
};