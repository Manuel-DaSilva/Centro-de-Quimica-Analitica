import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

// models 
import { Member } from 'src/app/models/member.interface';
import { MemberService } from '../../services/member.service';
import { MemberModalComponent } from './components/member-modal/member-modal.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styles: []
})
export class MembersComponent implements OnInit {
  // !test data
  public members: Member[]  = [
    {
      id: '1',
      name: 'Antonio Jose',
      email: 'email@email.com',
      phone: '1282939123',
      position: 'Director',
      cv: "urltocv",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUq71y6yGEk94T1hyj89lV-khy9OMkgZt0Dl1hecguJxUpLU6a"
    },
    {
      id: '2',
      name: 'Antonio Jose2',
      email: 'email2@email.com',
      phone: '1282932229123',
      position: 'Director 2',
      cv: "urltocv",
      imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUq71y6yGEk94T1hyj89lV-khy9OMkgZt0Dl1hecguJxUpLU6a"
    }
  ];
  constructor(
    private modalService: NgbModal,
    private toastService: ToastrService,
    private membersService: MemberService
    ) { }

  ngOnInit() {
  }
     /*
   * @desc open the modal to create or update element
   * @param equipment to be edited if it is passed
   */
  openMemberModal(member: Member = null) {
    let modalData = member;
    const memberModalRef = this.modalService.open(MemberModalComponent, {
      size: "lg"
    });
    memberModalRef.componentInstance.inputMemberData = modalData;
    memberModalRef.result
      .then((res: any) => {
        // modal closed
        if (res && res.success) {
          // if there is a member created or updated
          this.getMembers();
        }
      })
      .catch(() => {
        console.log("error closing modal");
      });
  }

  /*
   * @desc does the request to get all equipment
   */
  getMembers() {
    this.membersService.reqMembers().subscribe(
      (res: Member[]) => {
        this.members = res;
      },
      err => {
        console.log("error getting members");
        console.log(err);
      }
    );
  }

   /*
   * @desc does the request to delete the member
   * @param equipment to be deleted
  */
 deleteMember(member: Member) {
  this.membersService.deleteMember(member).subscribe(
    (res: any) => {
      // successfully deleted
      this.toastService.success("correctamente", "Miembro eliminado");
      this.removeMember(member.id);
    },
    err => {
      console.log("error deleting the member");
      console.log(err);
      this.toastService.error("el miembro", "Error al eliminar");
    }
  );
}

  /*
   * @desc deletes the equipment from the array
  */
  removeMember(id) {
    let pos = this.members
      .map(e => {
        return e.id;
      })
      .indexOf(id);
    if (pos > -1) {
      this.members.splice(pos, 1);
    }
  }

}
