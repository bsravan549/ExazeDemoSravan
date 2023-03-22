import {SET_INPUT_VALUE} from './actions';

const initialState = {
  inputValue: '',
};

function demoReducer(state = initialState, action: {type: any; payload: any}) {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {...state, inputValue: action.payload};
    default:
      return state;
  }
}
export default demoReducer;
