import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ServicesModalComponent } from "./components/services-modal/services-modal.component";
import { Service } from "src/app/models/service.interface";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styles: []
})
export class ServicesComponent implements OnInit {
  // ! test data
  public testServices = [
    {
      id: "id1",
      name: "name1",
      category: "category1",
      description: "desc1"
    },
    {
      id: "id2",
      name: "name2",
      category: "category1",
      description: "desc2"
    },
    {
      id: "id3",
      name: "name3",
      category: "category3",
      description: "desc3"
    }
  ];

  constructor(private modalService: NgbModal) {}

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
  }
}
