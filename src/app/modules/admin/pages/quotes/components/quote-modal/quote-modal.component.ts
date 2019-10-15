import { Component, OnInit, Input, Inject } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Quote } from "src/app/models/quotes.interface";
import { DOCUMENT } from '@angular/common';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-quote-modal',
  templateUrl: './quote-modal.component.html',
})
export class QuoteModalComponent implements OnInit {

  public quote;
  // input fields
  @Input()
  set inputQuoteData(quote: Quote) {
    this.quote = quote;
}
  constructor(
    private activeModal: NgbActiveModal,
    private toastService: ToastrService,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  emailCopy(email: string){
    const inputBox = this._document.createElement('textarea');
    inputBox.style.position = 'fixed';
    inputBox.style.left = '0';
    inputBox.style.top = '0';
    inputBox.style.opacity = '0';
    inputBox.value = email;
    this._document.body.appendChild(inputBox);
    inputBox.focus();
    inputBox.select();
    this._document.execCommand('copy');
    this._document.body.removeChild(inputBox);
    this.toastService.success('al portapapeles','Correo copiado')
  }

  sendGmail(){
    const url = 
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" 
    + this.quote.company.contactEmail 
    + "&su=" 
    + 'Cotizacion Centro de Quimica Analitica ' 
    + this.quote.date;
    window.open(url, "_blank");
  }
  sendMail(){
    const url = 
    "mailto:" 
    + this.quote.company.contactEmail 
    + "?subject=" 
    + 'Cotizacion Centro de Quimica Analitica ' 
    + this.quote.date;
    window.open(url);
  }
}
