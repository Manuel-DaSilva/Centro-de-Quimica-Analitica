import { Equipment } from './../../../../../../models/equipment.interface';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { EquipmentService } from 'src/app/modules/admin/services/equipment.service';
import { EquipmentCategory } from 'src/app/models/equipment.category.interface';

@Component({
  selector: 'app-equipment-modal',
  templateUrl: './equipment-modal.component.html',
  styles: []
})
export class EquipmentModalComponent implements OnInit {
  public equipment: Equipment;
  public mode: string;
  public equipmentForm: FormGroup;
  public invalidAttempt = false;


  public categories: EquipmentCategory[] = [];
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
      title: new FormControl("", Validators.required),
      id: new FormControl(),
      category_id: new FormControl("",Validators.required),
    });
  }

  ngOnInit() {
    this.getCategories();
  }

  /*
   * @desc handle the type of action over the equipment
   * @param equipment to edit
   */
  setEquipment(equipment: Equipment) {
    this.equipment = equipment;
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
    this.equipmentForm.controls["title"].setValue(equipment.title);
    this.equipmentForm.controls["id"].setValue(equipment.id);
    this.equipmentForm.controls["category_id"].setValue(equipment.category_id);
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

  getCategories(){
    this.equipmentService.reqCategories().subscribe(
      (res: any) => {
        this.categories = res.data;
        console.log(this.categories);
        if(this.equipment){
          if(this.equipment.category_id){
            this.equipmentForm.controls['category_id'].setValue(this.equipment.category_id);
          }
        }
      },
      err => {
        console.log("error getting equipment categories");
        console.log(err);
      }
    );
  }


}
