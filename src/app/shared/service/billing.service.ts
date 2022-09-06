import { Injectable } from '@angular/core';
import { invoice } from '../model/invoice';
import { Product } from '../model/product';
import { billing } from '../data/data';
@Injectable({
  providedIn: 'root'
})
export class BillingService {


  constructor() { }

  getAllInvoice() {
    return billing;
  }

  getInvoiceById(id): invoice {
    return billing.find(f => f.ID == id);
  }
}
