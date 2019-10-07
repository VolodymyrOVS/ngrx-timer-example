import { Action } from "@ngrx/store";
import { Counter } from "../models/counter.model";
import * as MyActions from "../actions/counter.actions";

const initialStateValue: Counter = {
  firstValue: -5,
  secondValue: 10
};

export function reducer(state: Counter = initialStateValue, action: Action) {
  switch (action.type) {
    case MyActions.CounterActionTypes.Increase:
      return {
        firstValue: state.firstValue + 1,
        secondValue: state.secondValue
      };
    case MyActions.CounterActionTypes.Decrease:
      return {
        firstValue: state.firstValue,
        secondValue: state.secondValue - 1
      };
    case MyActions.CounterActionTypes.Change:
      return { ...state };
    case MyActions.CounterActionTypes.Reset:
      return { ...initialStateValue };
    default:
      return state;
  }
}
