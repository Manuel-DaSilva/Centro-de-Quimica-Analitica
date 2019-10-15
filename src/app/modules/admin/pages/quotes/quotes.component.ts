import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quotes.interface';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { QuoteModalComponent } from './components/quote-modal/quote-modal.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styles: []
})
export class QuotesComponent implements OnInit {

  // !test
  public quotes: Quote[] = [
    {
      id: 1,
      date: '12/12/19',
      company: {
          company: 'Compañia1',
          address: 'Direccion1',
          contactEmail: 'email1@email.com',
          contactName: 'Nombre1',
          contactPhone: 111111,
          rif: 123123123
      },
      service:{
          identification: 'Identificacion de muestra',
          observations: 'Ninguna observacion',
          others: 'Requiero otro servicio',
          quantity: 12,
          service: {
            id: 3,
            name: "Servicio 3",
            category: {
              id: 3,
              name: 'category3'
            },
            description: "desc3"
          },
          state: 'Solido',
          type: 'Organico',
          use: 'Ninguno',
      }
    },
    {
      id: 1,
      date: '10/10/19',
      information: 'Solicito informacion de precio para procesar un componente...',
      company: {
          company: 'Compañia2',
          address: 'Direccion de mi compañia2',
          contactEmail: 'miemail2@email.com',
          contactName: 'Mi nombre2',
          contactPhone: 123151512,
          rif: 2125123123
      }
    },

  ]
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  /*
   * @desc open the modal to read the quote
   * @param service to be edited if it is passed
   */
  openModal(quote: Quote) {
    let modalData = quote;
    const serviceModalRef = this.modalService.open(QuoteModalComponent, {
      size: "lg"
    });
    serviceModalRef.componentInstance.inputQuoteData = modalData;
    
  }

}
