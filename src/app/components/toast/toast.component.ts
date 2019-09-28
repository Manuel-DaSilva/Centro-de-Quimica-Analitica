import { Component, OnInit } from "@angular/core";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-toast",
  template: ``,
  host: { "[class.ngb-toasts]": "true" }
})
export class ToastComponent implements OnInit {
  constructor(toastService: ToastService) {}

  ngOnInit() {}
}
