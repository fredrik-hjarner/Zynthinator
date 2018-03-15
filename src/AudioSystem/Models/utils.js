export const safeDisconnect = (node) => {
  try {
    node.disconnect();
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
