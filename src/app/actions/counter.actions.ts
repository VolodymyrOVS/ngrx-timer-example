import { Action } from "@ngrx/store";

export enum CounterActionTypes {
  Change = "[Counter] Change Counters",
  Increase = "[Counter] Increase Counters",
  Decrease = "[Counters] Decrease Counters",
  Reset = "[Counters] Reset Counters"
}

export class Change implements Action {
  readonly type = CounterActionTypes.Change;

  constructor() {}
}
export class Increment implements Action {
  readonly type = CounterActionTypes.Increase;

  constructor() {}
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrease;

  constructor() {}
}

export class Reset implements Action {
  readonly type = CounterActionTypes.Reset;

  constructor() {}
}

export type Actions = Increment | Decrement | Change | Reset;
