import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";
import { Service } from "src/app/models/service.interface";
import { ServicesService } from "../../../../services/services.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-services-modal",
  templateUrl: "./services-modal.component.html",
  styles: []
})
export class ServicesModalComponent implements OnInit {
  public mode: string;
  public serviceForm: FormGroup;
  public categories = [
    {
      id: 1,
      name: "Cateogria 1"
    },
    {
      id: 2,
      name: "Categoria 2"
    }
  ];

  // input fields
  @Input()
  set inputServiceData(service: Service) {
    this.setService(service);
  }
  constructor(
    private activeModal: NgbActiveModal,
    private servicesService: ServicesService,
    private toastService: ToastrService
  ) {
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

  createService() {
    // create code
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
}
