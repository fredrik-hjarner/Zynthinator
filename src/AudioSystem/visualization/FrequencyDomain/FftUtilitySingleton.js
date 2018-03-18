import { audioContext } from '../Models/audioContext';

export const calculateFrequencyInNthBin =
  (n, samplesToStore) => {
    const { sampleRate } = audioContext;
    return n * sampleRate / samplesToStore;
  };
