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

  public mode: string;
  public investigationForm: FormGroup;
  public invalidAttempt = false;
  public members: Member[] = [
    {
      id: '1',
      name: 'Antonio Jose',
      email: 'email@email.com',
      phonenumber: '1282939123',
      position: 'Director',
      cv: "urltocv",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUq71y6yGEk94T1hyj89lV-khy9OMkgZt0Dl1hecguJxUpLU6a"
    },
    {
      id: '2',
      name: 'Antonio Jose2',
      email: 'email2@email.com',
      phonenumber: '1282932229123',
      position: 'Director 2',
      cv: "urltocv",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUq71y6yGEk94T1hyj89lV-khy9OMkgZt0Dl1hecguJxUpLU6a"
    }
  ];

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
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      researches: new FormArray([])
    });
  }

  ngOnInit() {
    // this.getMembers();
  }

  /*
   * @desc handle the type of action over the service
   * @param service to edit
   */
  setInvestigation(investigation: Investigation) {
    if (investigation) {
      this.mode = "edit";
      this.setForEdit(investigation);
    } else {
      this.mode = "create";
      this.addResearcherArray();
    }
  }

  /*
   * @desc sets the icoming data of the service on the forms
   * @param service to be edited
   */
  setForEdit(investigation: Investigation) {
    this.investigationForm.controls["name"].setValue(investigation.researcher);
    this.investigationForm.controls["description"].setValue(investigation.position);
    investigation.researches.forEach( researcher => {
      (<FormArray>this.investigationForm.controls['researches']).push(
        new FormControl(researcher, Validators.required)
      )
    });
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
  createService() {
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
      (res: Member[]) => {
        this.members = res;
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

  addResearcherArray(){
    (<FormArray>this.investigationForm.controls['researches']).push(
      new FormControl('', Validators.required)
    );
  }

  get formData() { return <FormArray>this.investigationForm.get('researches'); }

}
