import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Investigation } from 'src/app/models/investigation.interface';
import { InvestigationsService } from 'src/app/modules/admin/services/investigations.service';
import { Member } from 'src/app/models/member.interface';
import { MemberService } from 'src/app/modules/admin/services/member.service';
@Component({
  selector: 'app-investigation-modal',
  templateUrl: './investigation-modal.component.html',
  styles: []
})
export class InvestigationModalComponent implements OnInit {
  private investigation: Investigation;
  public mode: string;
  public investigationForm: FormGroup;
  public invalidAttempt = false;
  public members: Member[] = [];

  // input fields
  @Input()
  set inputInvestigationData(investigation: Investigation) {
    this.setInvestigation(investigation);
  }
  constructor(
    private activeModal: NgbActiveModal,
    private investigationService: InvestigationsService,
    private memberService: MemberService,
    private toastService: ToastrService
  ) {
    this.investigationForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      member_id: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    this.getMembers();
  }

  /*
   * @desc handle the type of action over the service
   * @param service to edit
   */
  setInvestigation(investigation: Investigation) {
    this.investigation = investigation;
    if (investigation) {
      this.mode = "edit";
      this.setForEdit(investigation);
    } else {
      this.mode = "create";
      
    }
  }

  /*
   * @desc sets the icoming data of the service on the forms
   * @param service to be edited
   */
  setForEdit(investigation: Investigation) {
    
    this.investigationForm.controls["title"].setValue(investigation.title);
    this.investigationForm.controls["id"].setValue(investigation.id);
    this.investigationForm.controls["description"].setValue(investigation.description);
    this.investigationForm.controls["member_id"].setValue(investigation.member_id);
  }
  

  /*
   * @desc handle the petition to edit the service
   * @param service to edit
   */
  editInvestigation() {
    if(this.investigationForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    this.investigationService.updateInvestigation(this.investigationForm.value).subscribe(
      res => {
        this.toastService.success("correctamente", "Investigacion actualizada");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error updating research");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al editar la investigacion"
        );
      }
    );
  }

  /*
   * @desc handle the petition to create a service
   */
  createInvestigation() {
    if(this.investigationForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    this.investigationService.createInvestigation(this.investigationForm.value).subscribe(
      res => {
        this.toastService.success("correctamente", "Investigacion creada");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error creating research");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al crear la investigacion"
        );
      }
    );
  }

  /*
   * @desc handle the petition to get all categories for the services
   */
  getMembers() {
    this.memberService.reqMembers().subscribe(
      (res: any) => {
        this.members = res.data;

        if(this.investigation){
          if(this.investigation.member_id){
            this.investigationForm.controls['member_id'].setValue(this.investigation.member_id);
          }
        }
      },
      err => {
        console.log("error getting members");
        console.log(err);
      }
    );
  }

  closeModal() {
    this.activeModal.close();
  }

}
