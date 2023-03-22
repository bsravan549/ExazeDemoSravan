export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = (inputValue: any) => {
  return {
    type: SET_INPUT_VALUE,
    payload: inputValue,
  };
};
