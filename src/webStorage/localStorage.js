export const isPreviousStateStoredInLocalStorage =
  () =>
    (localStorage.zynthinatorState !== null && localStorage.zynthinatorState !== undefined);

export const getState =
  () => {
    try {
      if (isPreviousStateStoredInLocalStorage()) {
        return JSON.parse(localStorage.zynthinatorState);
      }
      return undefined;
    } catch (err) {
      return undefined;
    }
  };

export const saveState =
  (state) => {
    try {
      localStorage.zynthinatorState =
        JSON.stringify(state);
    } catch (err) {
      debugger;
      alert("Can't save state in localStorage");
    }
  };
