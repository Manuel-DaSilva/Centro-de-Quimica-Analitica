import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { EquipmentService } from 'src/app/modules/admin/services/equipment.service';
import { Equipment } from 'src/app/models/equipment.interface';

@Component({
  selector: 'app-equipment-modal',
  templateUrl: './equipment-modal.component.html',
  styles: []
})
export class EquipmentModalComponent implements OnInit {

  public mode: string;
  public equipmentForm: FormGroup;
  public invalidAttempt = false;

  // input fields
  @Input()
  set inputEquipmentData(equipment: Equipment) {
    this.setEquipment(equipment);
  }
  constructor(
    private activeModal: NgbActiveModal,
    private equipmentService: EquipmentService,
    private toastService: ToastrService
  ) {
    this.equipmentForm = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  /*
   * @desc handle the type of action over the equipment
   * @param equipment to edit
   */
  setEquipment(equipment: Equipment) {
    if (equipment) {
      this.mode = "edit";
      this.setForEdit(equipment);
    } else {
      this.mode = "create";
    }
  }

  /*
   * @desc sets the icoming data of the equipment on the forms
   * @param equipment to be edited
   */
  setForEdit(equipment: Equipment) {
    this.equipmentForm.controls["name"].setValue(equipment.name);
  }

  /*
   * @desc handle the petition to edit the equipment
   * @param equipment to edit
   */
  editEquipment() {
    if(this.equipmentForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    // edit code
    this.equipmentService.updateEquiment(this.equipmentForm.value).subscribe(
      res => {
        this.toastService.success("correctamente", "Equipo actualizado");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error updating equipment");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al editar el equipo"
        );
      }
    );
  }

  /*
   * @desc handle the petition to create a equipment
   */
  createEquipment() {
    if(this.equipmentForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    this.equipmentService.createEquiment(this.equipmentForm.value).subscribe(
      res => {
        this.toastService.success("correctamente", "equipo creado");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error creating equipment");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al crear el equipo"
        );

      }
    );
  }

  closeModal() {
    this.activeModal.close();
  }
}
