export const audioContext =
  new (window.AudioContext || window.webkitAudioContext)();
