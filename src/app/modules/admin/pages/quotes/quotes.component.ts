import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quotes.interface';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { QuoteModalComponent } from './components/quote-modal/quote-modal.component';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styles: ['.unread{background-color: #d4ebd0;}']
})
export class QuotesComponent implements OnInit {

  public page;
  public lastPage;


  // !test
  public quotes: Quote[] = []
  constructor(
    private modalService: NgbModal,
    private quoteService: QuotesService
  ) { }

  ngOnInit() {
    this.getQuotes(1);
  }

  /*
   * @desc open the modal to read the quote
   * @param service to be edited if it is passed
   */
  openModal(quote: Quote) {
    let modalData = quote;
    
    
    this.quoteService.updateReaded(quote).subscribe(
      res => {this.quotes[this.quotes.indexOf(quote)].readed = true; console.log(res);
      },
      err => console.log(err)
    );
    const serviceModalRef = this.modalService.open(QuoteModalComponent, {
      size: "lg"
    });
    serviceModalRef.componentInstance.inputQuoteData = modalData;
    
  }

  getQuotes(page){
    this.quoteService.reqQuotes(page).subscribe(
        (res: any) => {
          console.log(res);
          
          this.lastPage = res.pages;
          this.page = res.actualPage;
          this.quotes = res.data;
        },
        err => {
          console.log("error getting quotes");
          console.log(err);
        }
      );
  }

  /*
   * @desc takes control over page change
   * @param action  -1 or +1 depeding on the direction of the next page
   */
  onPageChange(action) {
    let nextPage = this.page + action;
    if (nextPage <= 0 || nextPage > this.lastPage) {
      // getting out of the limits
      return;
    } else {
      this.reqPage(nextPage);
    }
  }

    /*
   * @param page  page to be set
   */
  reqPage(page) {
    this.page = page;
    // setting the corrects alerts
    this.getQuotes(page);
  }

}
