import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import { Service } from "src/app/models/service.interface";
@Component({
  selector: "app-services-modal",
  templateUrl: "./services-modal.component.html",
  styles: []
})
export class ServicesModalComponent implements OnInit {
  public mode: string;
  public service: any;

  public serviceForm: FormGroup;

  // input fields
  @Input()
  set inputServiceData(service: Service) {
    this.setData(service);
  }
  constructor(private activeModal: NgbActiveModal) {
    this.serviceForm = new FormGroup({
      name: new FormControl(""),
      category: new FormControl(""),
      description: new FormControl("")
    });
  }

  ngOnInit() {}

  setData(service: Service) {
    if (service) {
      this.mode = "edit";
      this.setForEdit(service);
    } else {
      this.mode = "create";
    }
  }

  setForEdit(service: Service) {
    this.serviceForm.controls["name"].setValue(service.name);
    this.serviceForm.controls["category"].setValue(service.category);
    this.serviceForm.controls["description"].setValue(service.description);
  }

  closeModal() {
    this.activeModal.close();
  }

  editService() {
    // edit code
    this.activeModal.close();
  }

  createService() {
    // create code
    this.activeModal.close();
  }
}
