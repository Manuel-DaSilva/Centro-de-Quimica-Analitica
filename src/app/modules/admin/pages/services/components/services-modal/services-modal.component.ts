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
  public serviceForm: FormGroup;

  // input fields
  @Input()
  set inputServiceData(service: Service) {
    this.setService(service);
  }
  constructor(private activeModal: NgbActiveModal) {
    this.serviceForm = new FormGroup({
      name: new FormControl(""),
      category: new FormControl(""),
      description: new FormControl("")
    });
  }

  ngOnInit() {}

  /*
   * @desc handle the type of action over the service
   * @param service to edit
   */
  setService(service: Service) {
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
