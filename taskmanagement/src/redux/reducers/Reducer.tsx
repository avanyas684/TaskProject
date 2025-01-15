import { AnyAction } from "redux";
import * as actionTypes from "../actionTypes";

interface typeStates {
  userRegistration: any;
  
}

const initialState: typeStates = {
  userRegistration: null,
 
};

const Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.USER_REGISTRATION:
      return { ...state, userRegistration: action.payload };

   

    default:
      return state;
  }

    
};

export default Reducer;
