import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

// components
import { CategoryModalComponent } from './components/category-modal/category-modal.component';
import { ServicesModalComponent } from "./components/services-modal/services-modal.component";
// services
import { ToastrService } from "ngx-toastr";
import { ServicesService } from "../../services/services.service";
// models
import { Service } from "src/app/models/service.interface";
import { ServiceCategory } from 'src/app/models/service.category.interface';

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styles: []
})
export class ServicesComponent implements OnInit {

  public services: Service[] = [];

  public categories: ServiceCategory[] = [];

  constructor(
    private modalService: NgbModal,
    private servicesService: ServicesService,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    this.getServices();
    this.getCategories();
  }

  /*
   * @desc open the modal to create or update element
   * @param service to be edited if it is passed
   */
  openServiceModal(service: Service = null) {
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
   * @desc open the modal to create or update element
   * @param service to be edited if it is passed
   */
  openCategoryModal(category: ServiceCategory = null) {
    let modalData = category;
    const categoryModalRef = this.modalService.open(CategoryModalComponent, {
      size: "lg"
    });
    categoryModalRef.componentInstance.inputCategoryData = modalData;
    categoryModalRef.result
      .then((res: any) => {
        // modal closed
        if (res && res.success) {
          // if there is a category created or updated
          this.getCategories();
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
      (res: any) => {
        this.services = res.data;
      },
      err => {
        console.log("error getting services");
        console.log(err);
      }
    );
  }

   /*
   * @desc does the request to get all services
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

  /*
   * @desc does the request to delete the service
   * @param service to be deleted
  */
  deleteService(service: Service) {
    this.servicesService.deleteService(service).subscribe(
      (res: any) => {
        // successfully deleted
        this.toastService.success("correctamente", "Servicio eliminado");
        this.removeService(service.id);
      },
      err => {
        console.log("error deleting the service");
        console.log(err);
        this.toastService.error("el servicio", "Error al eliminar");
      }
    );
  }

   /*
   * @desc does the request to delete the category
   * @param category to be deleted
  */
  deleteCategory(category: ServiceCategory) {
    this.servicesService.deleteCategory(category).subscribe(
      (res: any) => {
        // successfully deleted
        this.toastService.success("correctamente", "Categoria eliminada");
        this.removeCategory(category.id);
      },
      err => {
        console.log("error deleting the category");
        console.log(err);
      this.toastService.error("la categoria", "Error al eliminar");
      }
    );
  }

  /*
  * @desc deletes the service from the array
  */
  removeService(id) {
    let pos = this.services
      .map(e => {
        return e.id;
      })
      .indexOf(id);
    if (pos > -1) {
      this.services.splice(pos, 1);
    }
  }

  /*
   * @desc deletes the category from the array
  */
  removeCategory(id) {
    let pos = this.categories
      .map(e => {
        return e.id;
      })
      .indexOf(id);
    if (pos > -1) {
      this.categories.splice(pos, 1);
    }
  }
}
