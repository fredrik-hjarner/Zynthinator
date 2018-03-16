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
