import * as MyActions from "../actions/counter.actions";
import { Injectable, Pipe } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";

@Injectable()
export class EditEffect {
  constructor(private actions$: Actions) {}

  @Effect()
  changeCounters$ = this.actions$
    .pipe(ofType<MyActions.Change>(MyActions.CounterActionTypes.Change))
    .pipe(
      switchMap(() => {
        return [
          new MyActions.Increment(),
          new MyActions.Decrement(),
          new MyActions.Decrement()
        ];
      })
    );
}
