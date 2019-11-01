import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MemberService } from 'src/app/modules/admin/services/member.service';
import { Member } from 'src/app/models/member.interface';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styles: []
})
export class MemberModalComponent implements OnInit {

  public mode: string;
  public memberForm: FormGroup;
  public invalidAttempt = false;
  public member;
  // image variables
  public validImageExtensions = ["png", "jpg", "gif", "jpeg"];
  public invalidFile = false;
  public memberImage;
  public imagePreview;
  public imageReady = false;

  // image variables
  public validCVExtensions = ["pdf"];
  public invalidCVFile = false;
  public memberCV;
  public cvReady = false;

  // input fields
  @Input()
  set inputMemberData(member: Member) {
    this.setMember(member);
  }
  constructor(
    private activeModal: NgbActiveModal,
    private memberService: MemberService,
    private toastService: ToastrService
  ) {
    this.memberForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      position: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  /*
   * @desc handle the type of action over the equipment
   * @param equipment to edit
   */
  setMember(member: Member) {
    this.member = member;
    if (member) {
      this.mode = "edit";
      this.setForEdit(member);
    } else {
      this.mode = "create";
    }
  }

  /*
   * @desc sets the icoming data of the equipment on the forms
   * @param equipment to be edited
   */
  setForEdit(member: Member) {
    this.memberForm.controls["name"].setValue(member.name);
    this.memberForm.controls["email"].setValue(member.email);
    this.memberForm.controls["phone"].setValue(member.phone);
    this.memberForm.controls["position"].setValue(member.position);
  }

  /*
   * @desc handle the petition to edit the equipment
   * @param equipment to edit
   */
  editMember() {
    if(this.memberForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    // edit code
    this.memberService.updateMember(this.memberForm.value,this.memberImage,this.memberCV).subscribe(
      res => {
        this.toastService.success("correctamente", "Miembro actualizado");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error updating member");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al editar el miembro"
        );
      }
    );
  }

  /*
   * @desc handle the petition to create a equipment
   */
  createEquipment() {
    if(this.memberForm.invalid){
      this.invalidAttempt = true;
      return;
    }
    if (!this.memberImage || !this.memberCV){
      this.invalidAttempt = true;
      return;
    }
    this.memberService.createMember(this.memberForm.value,this.memberImage,this.memberCV).subscribe(
      res => {
        this.toastService.success("correctamente", "miembro creado");
        this.activeModal.close({ success: true });
      },
      err => {
        console.log("error creating member");
        console.log(err);
        this.toastService.error(
          "el servidor no respondio",
          "Error al crear el miembro"
        );

      }
    );
  }

  onImageSelection(image: File) {
    // reset of validation
    this.imageReady = false;
    this.invalidFile = false;
    if (!image) return;
    if (image.type.indexOf("image") < 0) {
      this.imagePreview = null;
      this.invalidFile = true;
      return;
    }
    let imageName = image.name.split(".");
    let extension = imageName[imageName.length - 1];

    if (this.validImageExtensions.indexOf(extension) < 0) {
      this.invalidFile = true;
      return;
    }

    this.memberImage = image;
    this.imageReady = true;
    // building image preview
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => (this.imagePreview = reader.result);
  }

  onCvSelection(cv: File) {
    // reset of validation
    this.cvReady = false;
    this.invalidCVFile = false;
    if (!cv) return;
    
    let cvName = cv.name.split(".");
    let extension = cvName[cvName.length - 1];

    if (this.validCVExtensions.indexOf(extension) < 0) {
      this.invalidCVFile = true;
      return;
    }

    this.memberCV = cv;
    this.cvReady = true;
    // building image preview
  }

  closeModal() {
    this.activeModal.close();
  }

}
