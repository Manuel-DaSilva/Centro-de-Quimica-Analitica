import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
// models
import { Equipment } from 'src/app/models/equipment.interface';
import { EquipmentService } from '../../services/equipment.service';
import { EquipmentModalComponent } from './components/equipment-modal/equipment-modal.component';
@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styles: []
})
export class EquipmentComponent implements OnInit {
  public equipments: Equipment[];
  constructor(
    private modalService: NgbModal,
    private equipmentService: EquipmentService,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    this.getEquipment();
  }

    /*
   * @desc open the modal to create or update element
   * @param equipment to be edited if it is passed
   */
  openEquipmentModal(equipment: Equipment = null) {
    let modalData = equipment;
    const equipmentModalRef = this.modalService.open(EquipmentModalComponent, {
      size: "lg"
    });
    equipmentModalRef.componentInstance.inputEquipmentData = modalData;
    equipmentModalRef.result
      .then((res: any) => {
        // modal closed
        if (res && res.success) {
          // if there is a service created or updated
          this.getEquipment();
        }
      })
      .catch(() => {
        console.log("error closing modal");
      });
  }

  /*
   * @desc does the request to get all equipment
   */
  getEquipment() {
    this.equipmentService.reqEquiments().subscribe(
      (res: any) => {
        this.equipments = res.data.map(item => {
          item['id'] = item._id.$oid;
          delete item['_id'];
          return item
        });
        console.log(this.equipments);
      },
      err => {
        console.log("error getting equipment");
        console.log(err);
      }
    );
  }

   /*
   * @desc does the request to delete the equipment
   * @param equipment to be deleted
  */
 deleteEquipment(equipment: Equipment) {
  this.equipmentService.deleteEquiment(equipment).subscribe(
    (res: any) => {
      // successfully deleted
      this.toastService.success("correctamente", "Equipo eliminado");
      this.removeEquipment(equipment.id);
    },
    err => {
      console.log("error deleting the equipment");
      console.log(err);
      this.toastService.error("el equipo", "Error al eliminar");
    }
  );
}

  /*
   * @desc deletes the equipment from the array
  */
  removeEquipment(id) {
    let pos = this.equipments
      .map(e => {
        return e.id;
      })
      .indexOf(id);
    if (pos > -1) {
      this.equipments.splice(pos, 1);
    }
  }
}
