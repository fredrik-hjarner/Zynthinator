export const safeDisconnect = (node) => {
  try {
    node.disconnect();
  } catch (ex) {
    console.log('Exception in safeDisconnect: ');
    console.dir(ex);
    console.log('');
  }
};
