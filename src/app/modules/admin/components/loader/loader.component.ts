import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loader",
  template: `
    <div class="text-center">
      <i class="fas fa-circle-notch fa-spin fa-3x"></i>
      <br />
      <h3>Cargando</h3>
    </div>
  `,
  styles: []
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
