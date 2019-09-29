import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ServicesModalComponent } from "./components/services-modal/services-modal.component";
import { Service } from "src/app/models/service.interface";
import { ServicesService } from "../../services/services.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styles: []
})
export class ServicesComponent implements OnInit {
  // ! test data
  public services = [
    {
      id: 1,
      name: "name1",
      category: "category1",
      description: "desc1"
    },
    {
      id: 2,
      name: "name2",
      category: "category1",
      description: "desc2"
    },
    {
      id: 3,
      name: "name3",
      category: "category3",
      description: "desc3"
    }
  ];

  constructor(
    private modalService: NgbModal,
    private servicesService: ServicesService,
    private toastService: ToastrService
  ) {}

  ngOnInit() {}

  /*
   * @desc open the modal to create or update element
   * @param service to be edited if it is passed
   */
  openModal(service: Service = null) {
    let modalData = service;
    const serviceModalRef = this.modalService.open(ServicesModalComponent, {
      size: "lg"
    });
    serviceModalRef.componentInstance.inputServiceData = modalData;
    serviceModalRef.result
      .then((res: any) => {
        if (res && res.success) {
          this.getServices();
        }
      })
      .catch(() => {
        console.log("error closing modal");
      });
  }

  getServices() {
    this.servicesService.reqServices().subscribe(
      (res: any) => {
        this.services = res.data;
      },
      err => {
        console.log("error getting services");
        console.log(err);
      }
    );
  }

  deleteServices(service) {
    this.servicesService.deleteService(service).subscribe(
      (res: any) => {
        this.toastService.success("correctamente", "Servicio eliminado");
        this.removeFromArray(service.id);
      },
      err => {
        console.log("error deleting the service");
        console.log(err);
        this.toastService.error("el servicio", "Error al eliminar");
      }
    );
  }

  removeFromArray(id) {
    let pos = this.services
      .map(e => {
        return e.id;
      })
      .indexOf(id);
    if (pos > -1) {
      this.services.splice(pos, 1);
    }
  }
}
