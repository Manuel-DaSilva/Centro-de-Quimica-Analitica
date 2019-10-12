import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, Form } from "@angular/forms";
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "../../../../services/data.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styles: []
})
export class QuotesComponent implements OnInit {
  private type;

  public companyForm: FormGroup;
  public infoForm: FormGroup;

  public serviceForm: FormGroup;

  public selectedServiceId;
  public selectedServiceName;
  // !test
  public services;
  @ViewChild("tabSet") private tabSet: NgbTabset;

  constructor(
    private dataService: DataService,
    private toastService: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.services = this.dataService.getServices();
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

    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        let serviceId = params.id;
        this.selectedServiceId = serviceId;
        
        this.serviceForm.controls['analisis'].setValue(serviceId);
        this.selectedServiceName = this.getServiceName(serviceId);
      }
    });

    this.serviceForm.controls['analisis'].valueChanges.subscribe(change => {
      this.selectedServiceName =  this.getServiceName(change);
    })
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
            this.toastService.success(
              "¡Cotizacion enviada",
              "Te contactaremos pronto"
            );
            this.infoForm.reset();
            this.companyForm.reset();
            this.tabSet.select("tabType");
          },
          err => {
            this.toastService.error("Error al enviar", "Intenta mas tarde");
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
            this.toastService.success(
              "¡Cotizacion enviada",
              "Te contactaremos pronto"
            );
            this.infoForm.reset();
            this.companyForm.reset();
            this.tabSet.select("tabType");
          },
          err => {
            this.toastService.error("Error al enviar", "Intenta mas tarde");
            console.log("error sending info quote");
            console.log(err);
          }
        );
    }
  }

  getServiceName(id){
    let services = this.dataService.getServices();
    let serviceName;
    services.forEach(service => {
      if(service.id === id){
        serviceName = service.name;
        return
      }
    });
    return serviceName;

  }
}
