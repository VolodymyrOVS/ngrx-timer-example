import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/counter.reducer";

import { EffectsModule } from "@ngrx/effects";
import { EditEffect } from "./effects/edit.effect";
import { RenderComponentComponent } from './render-component/render-component.component';
import { SmartComponentComponent } from './smart-component/smart-component.component';

@NgModule({
  declarations: [AppComponent, RenderComponentComponent, SmartComponentComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: reducer
    }),
    EffectsModule.forRoot([EditEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
