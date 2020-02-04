import { Component, OnInit } from '@angular/core';
import { Investigation } from 'src/app/models/investigation.interface';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { InvestigationsService } from '../../services/investigations.service';
import { InvestigationModalComponent } from './components/investigation-modal/investigation-modal.component';
@Component({
  selector: 'app-investigations',
  templateUrl: './investigations.component.html',
  styles: []
})
export class InvestigationsComponent implements OnInit {

  // !test data
  public investigations: Investigation[] =  [
    {
      researcher: "Lider",
      position: "Posicion",
      researches: [
        {
          name: "inve1",
          description: "desc1",
        },
        {
          name: "inve2",
          description: "desc2",
        }
      ]
    },
    {
      researcher: "Lider2",
      position: "Posicion2",
      researches: [
        {
          name: "inve3",
          description: "desc1",
        },
        {
          name: "inve4",
          description: "desc2",
        }
      ]
    }
  ];
  
  constructor(
    private modalService: NgbModal,
    private toastService: ToastrService,
    private investigationService: InvestigationsService
    ) { }

  ngOnInit() {
  }
     /*
   * @desc open the modal to create or update element
   * @param equipment to be edited if it is passed
   */
  openInvestigationModal(investigation: Investigation = null) {
    let modalData = investigation;
    const investigationModalRef = this.modalService.open(InvestigationModalComponent, {
      size: "lg"
    });
    investigationModalRef.componentInstance.inputInvestigationData = modalData;
    investigationModalRef.result
      .then((res: any) => {
        // modal closed
        if (res && res.success) {
          // if there is a member created or updated
          this.getInvestigations();
        }
      })
      .catch(() => {
        console.log("error closing modal");
      });
  }

  /*
   * @desc does the request to get all equipment
   */
  getInvestigations() {
    this.investigationService.reqInvestigations().subscribe(
      (res: Investigation[]) => {
        this.investigations = res;
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
 deleteInvestigation(investigation: Investigation) {
  this.investigationService.deleteInvestigation(investigation).subscribe(
    (res: any) => {
      // successfully deleted
      this.toastService.success("correctamente", "Investigación eliminada");
      this.removeInvestigation(investigation.id);
    },
    err => {
      console.log("error deleting the investigation");
      console.log(err);
      this.toastService.error("la investigación", "Error al eliminar");
    }
  );
}

  /*
   * @desc deletes the equipment from the array
  */
 removeInvestigation(id) {
    let pos = this.investigations
      .map(e => {
        return e.id;
      })
      .indexOf(id);
    if (pos > -1) {
      this.investigations.splice(pos, 1);
    }
  }

}
