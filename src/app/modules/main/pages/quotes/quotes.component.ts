import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, Form } from "@angular/forms";
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styles: []
})
export class QuotesComponent implements OnInit {
  private type;

  private companyForm: FormGroup;
  private infoForm: FormGroup;

  private serviceForm: FormGroup;
  // !test
  public analisis = [
    {
      id: "1",
      name: " Analisis 1"
    },
    {
      id: "2",
      name: " Analisis 2"
    },
    {
      id: "3",
      name: " Analisis 3"
    },
    {
      id: "4",
      name: " Analisis 4"
    }
  ];
  @ViewChild("tabSet") private tabSet: NgbTabset;

  constructor(private dataService: DataService) {
    this.companyForm = new FormGroup({
      company: new FormControl("", Validators.required),
      rif: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      contactName: new FormControl("", Validators.required),
      contactPhone: new FormControl("", Validators.required),
      contactEmail: new FormControl("", [Validators.required, Validators.email])
    });

    this.infoForm = new FormGroup({
      information: new FormControl("", Validators.required)
    });

    this.serviceForm = new FormGroup({
      identification: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      use: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      quantity: new FormControl("", Validators.required),
      analisis: new FormControl("", Validators.required),
      others: new FormControl("", Validators.required),
      observations: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  setType(type: string) {
    this.type = type;
    this.tabSet.select("tabInfo");
  }

  setInfoReady() {
    this.tabSet.select("tabContact");
  }

  sendQuote() {
    if (this.type === "info") {
      this.dataService
        .sendInfoQuote(this.infoForm.value, this.companyForm.value)
        .subscribe(
          (res: any) => {
            // show success alert
            this.infoForm.reset();
            this.companyForm.reset();
            this.tabSet.select("tabType");
          },
          err => {
            console.log("error sending info quote");
            console.log(err);
          }
        );
    } else {
      this.dataService
        .sendServiceQuote(this.serviceForm.value, this.companyForm.value)
        .subscribe(
          (res: any) => {
            // show success alert
            this.infoForm.reset();
            this.companyForm.reset();
            this.tabSet.select("tabType");
          },
          err => {
            console.log("error sending info quote");
            console.log(err);
          }
        );
    }
  }
}
