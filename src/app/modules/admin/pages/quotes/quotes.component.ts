import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quotes.interface';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { QuoteModalComponent } from './components/quote-modal/quote-modal.component';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styles: []
})
export class QuotesComponent implements OnInit {

  // !test
  public quotes: Quote[] = []
  constructor(
    private modalService: NgbModal,
    private quoteService: QuotesService
  ) { }

  ngOnInit() {
    this.getQuotes();
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

  getQuotes(){
    this.quoteService.reqQuotes().subscribe(
        (res: any) => {
          this.quotes = res.map(item => {
            item['id'] = item._id.$oid;
            return item;
          });
        },
        err => {
          console.log("error getting quotes");
          console.log(err);
        }
      );
  }

}
