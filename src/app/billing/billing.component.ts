import { Component, Input, OnInit } from '@angular/core';
import { LineCommand } from '../shared/model/line-command';
import { Product } from '../shared/model/product';
import { invoice } from '../shared/model/invoice';
import { BillingService } from '../shared/service/billing.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billing: invoice[];
  constructor(public billingService: BillingService) { }

  ngOnInit(): void {
    this.billing = this.billingService.getAllInvoice();
  }

}
