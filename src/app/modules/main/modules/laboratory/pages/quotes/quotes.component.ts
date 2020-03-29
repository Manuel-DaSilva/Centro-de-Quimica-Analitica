import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, Form } from "@angular/forms";
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../services/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styles: []
})
export class QuotesComponent implements OnInit {

  public companyForm: FormGroup;

  public serviceForm: FormGroup;

  public selectedService;

  // !test
  public services;
  @ViewChild("tabSet") private tabSet: NgbTabset;

  constructor(
    private dataService: DataService,
    private toastService: ToastrService,
  ) {




    this.getServices();

    this.companyForm = new FormGroup({
      companyName: new FormControl("", Validators.required),
      companyRif: new FormControl("", Validators.required),
      companyAddress: new FormControl("", Validators.required),
      contactName: new FormControl("", [Validators.required,Validators.pattern("[a-zA-Z]+")]),
      contactPhone: new FormControl("", Validators.required),
      contactEmail: new FormControl("", [Validators.required, Validators.email, Validators.pattern(".+.com$")])
    });

    this.serviceForm = new FormGroup({
      sampleType: new FormControl("", Validators.required),
      sampleIdentification: new FormControl("", Validators.required),
      sampleUsage: new FormControl("", Validators.required),
      samplePhysicalState: new FormControl("", Validators.required),
      sampleQuantity: new FormControl("", [Validators.required,Validators.min(1)]),
      serviceId: new FormControl("", Validators.required),
      otherService: new FormControl("", Validators.required),
      observations: new FormControl("", Validators.required)
    });


  }

  ngOnInit() {
    this.selectedService = this.dataService.getActiveService();
  }


  getServices() {
    this.dataService.reqServices().subscribe(
      (res: any) => {
        this.services = res.data;
      },
      err => {
        console.log("error getting services");
        console.log(err);
      }
    );
  }

  setInfoReady() {
    if(this.companyForm.invalid){
      console.log(this.companyForm);
      
      return;
    }
    this.tabSet.select("tabInfo");
    if(this.selectedService){
      this.serviceForm.controls['serviceId'].setValue(this.selectedService.id);
    }
  }

  sendQuote() {
    if(this.serviceForm.invalid){
      return;
    }

    const quoteInfo = {
      ...this.serviceForm.value,
      ...this.companyForm.value
    };

      this.dataService
        .sendQuote(quoteInfo)
        .subscribe(
          (res: any) => {
            // show success alert
            this.toastService.success(
              "¡Cotizacion enviada",
              "Te contactaremos pronto"
            );
            this.companyForm.reset();
            this.serviceForm.reset();
            this.tabSet.select("tabContact");
          },
          err => {
            this.toastService.error("Error al enviar", "Intenta mas tarde");
            console.log("error sending info quote");
            console.log(err);
          }
      );
  }

}
