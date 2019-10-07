import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-render-component",
  templateUrl: "./render-component.component.html",
  styleUrls: ["./render-component.component.scss"]
})
export class RenderComponentComponent implements OnInit {
  @Input() public currentValue1: number;
  @Input() public currentValue2: number;
  constructor() {}

  ngOnInit() {}
}
