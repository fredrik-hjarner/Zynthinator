export const safeDisconnect = (node, disconnectFrom = undefined) => {
  try {
    node.disconnect(disconnectFrom); // this should work right?
  } catch (ex) {
    console.log('Exception in safeDisconnect: ');
    console.dir(ex);
    console.log('');
  }
};

export const safeStop = (node) => {
  try {
    node.stop();
  } catch (ex) {
    console.log('Exception in safeStop: ');
    console.dir(ex);
    console.log('');
  }
};

export const safeConnect = (node, connectTo) => {
  if (connectTo === undefined) {
    console.log('Exception in safeConnect(node, connectTo): ');
    console.log('connectTo === undefined');
    console.log('node:');
    console.dir(node);
    console.log('');
    return;
  }
  try {
    node.connect(connectTo);
  } catch (ex) {
    console.log('Exception in safeConnect(node, connectTo): ');
    console.dir(ex);
    console.log('');
  }
};
