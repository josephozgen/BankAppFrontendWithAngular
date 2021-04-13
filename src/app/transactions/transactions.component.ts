import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "./transactions.service";
import {ITransaction} from "../shared/models/dto";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions:Array<ITransaction> = [];
  showForm = true;
    constructor(private transactionService: TransactionsService) {
    }

    ngOnInit(): void {
        this.getTransactions()
    }

    getTransactions() {
     this.transactionService.getTransactions()
         .subscribe(_res => {
           console.log("transactions" , _res)
           this.transactions = _res
         })
    }

    showTransactionForm() {
        this.showForm =!this.showForm
    }
}
