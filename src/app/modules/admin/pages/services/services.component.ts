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
  public services: Service[] = [
    {
      id: 1,
      name: "name1",
      category: {
        id: 1,
        name: 'category1'
      },
      description: "desc1"
    },
    {
      id: 2,
      name: "name2",
      category: {
        id: 2,
        name: 'category2'
      },
      description: "desc2"
    },
    {
      id: 3,
      name: "name3",
      category: {
        id: 3,
        name: 'category3'
      },
      description: "desc3"
    }
  ];

  constructor(
    private modalService: NgbModal,
    private servicesService: ServicesService,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    // this.getServices();
  }

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
        // modal closed
        if (res && res.success) {
          // if there is a service created or updated
          this.getServices();
        }
      })
      .catch(() => {
        console.log("error closing modal");
      });
  }

  /*
   * @desc does the request to get all services
   */
  getServices() {
    this.servicesService.reqServices().subscribe(
      (res: Service[]) => {
        this.services = res;
      },
      err => {
        console.log("error getting services");
        console.log(err);
      }
    );
  }

  /*
   * @desc does the request to delete the service
   * @param service to be deleted
  */
  deleteServices(service: Service) {
    this.servicesService.deleteService(service).subscribe(
      (res: any) => {
        // successfully deleted
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

  /*
   * @desc deletes the service from the array
  */
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
