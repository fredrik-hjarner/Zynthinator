class StringHelpers {
  /**
   * Sets the length of a string.
   * To my knowledge there is no native JS
   * method to both truncate to length
   * AND pad to length.
   */
  setLength = (length, str) =>
    str.padEnd(length).substr(0, length);
}

export const stringHelpers = new StringHelpers();
