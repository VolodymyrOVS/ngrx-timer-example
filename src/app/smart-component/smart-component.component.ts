import { Component, OnInit, Input } from "@angular/core";
import { Counter } from "../models/counter.model";
import { AppState } from "../app.state";
import { Store } from "@ngrx/store";
import { Observable, Subscription, timer } from "rxjs";
import * as MyActions from "../actions/counter.actions";

@Component({
  selector: "app-smart-component",
  templateUrl: "./smart-component.component.html",
  styleUrls: ["./smart-component.component.scss"]
})
export class SmartComponentComponent implements OnInit {
  @Input() private stateObject: any;
  public myState: Observable<Counter>;
  public timerInstanse: Observable<number>;
  private subscriptionForState: Subscription;
  private subscriptionForTimer: Subscription;

  constructor(private store: Store<AppState>) {
    this.myState = store.select("counter");
    this.timerInstanse = timer(1000, 1000);
  }

  public ngOnInit(): void {
    this.subscriptionForState = this.myState.subscribe((counter: Counter) => {
      console.log("counter state =", counter);
    });
  }

  public onStartTimerFunc(): void {
    this.subscriptionForTimer = this.timerInstanse.subscribe((n: number) => {
      this.store.dispatch(new MyActions.Change());
    });
  }

  public onStopFunc(): void {
    this.subscriptionForTimer.unsubscribe();
    this.subscriptionForState.unsubscribe();
  }

  public onResetFunc(): void {
    this.store.dispatch(new MyActions.Reset());
  }
}
