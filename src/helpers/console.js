let n = 1;

export const logNthTime = nth => message => {
  if (n === nth) {
    console.log(message);
    n = 1;
    return;
  }
  n++;
};
