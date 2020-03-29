import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ServicesService } from "../../../../services/services.service";
import { Service } from "src/app/models/service.interface";
import { ServiceCategory } from '../../../../../../models/service.category.interface';

@Component({
  selector: "app-services-modal",
  templateUrl: "./services-modal.component.html",
  styles: []
})

export class ServicesModalComponent implements OnInit {
  public service: Service;
  public mode: string;
  public serviceForm: FormGroup;
  public invalidAttempt = false;
  public categories: ServiceCategory[] = [];

  // input fields
  @Input()
  set inputServiceData(service: Service) {
    this.service = service;
    this.setService(service);
  }
  constructor(
    private activeModal: NgbActiveModal,
    private servicesService: ServicesService,
    private toastService: ToastrService
  ) {
    this.serviceForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl("", Validators.required),
      category_id: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    this.getCategories();
  }

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

  /*
   * @desc sets the icoming data of the service on the forms
   * @param service to be edited
   */
  setForEdit(service: Service) {
    this.serviceForm.controls["id"].setValue(service.id);
    this.serviceForm.controls["title"].setValue(service.title);
    this.serviceForm.controls["category_id"].setValue(service.category_id);
    this.serviceForm.controls["description"].setValue(service.description);
  }

  /*
   * @desc handle the petition to edit the service
   * @param service to edit
   */
  editService() {
    if(this.serviceForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    this.servicesService.updateService(this.serviceForm.value).subscribe(
      res => {
        this.toastService.success("correctamente", "Servicio actualizado");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error updating service");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al editar el servicio"
        );
      }
    );
  }

  /*
   * @desc handle the petition to create a service
   */
  createService() {
    if(this.serviceForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    this.servicesService.createService(this.serviceForm.value).subscribe(
      res => {
        this.toastService.success("correctamente", "Servicio creado");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error creating service");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al crear el servicio"
        );
      }
    );
  }

  /*
   * @desc handle the petition to get all categories for the services
   */
  getCategories() {
    this.servicesService.reqCategories().subscribe(
      (res: any) => {
        this.categories = res.data;
      },
      err => {
        console.log("error getting categories");
        console.log(err);
      }
    );
  }

  closeModal() {
    this.activeModal.close();
  }
}
