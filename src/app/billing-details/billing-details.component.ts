import { Component, OnInit } from '@angular/core';
import { invoice } from '../shared/model/invoice';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BillingService } from '../shared/service/billing.service';
@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit {

  facture: invoice;
  constructor(private route: ActivatedRoute, public billingService: BillingService) { }

  ngOnInit(): void {
    registerLocaleData(localeFr, 'fr');
    this.facture = this.billingService.getInvoiceById(this.route.snapshot.params.ID);

  }
  getPrixHorsTaxe(product, price, quantity): number {
    return (price) * quantity;
  }

  getPrixTTC(product, price, quantity): number {
    var result;
    if (product.necessaryProduct && !product.importedProduct) {
      result = (price) * quantity;
    } else if (product.isBook) {
      result = (price + (price * 0.1)) * quantity;
    } else if (!product.necessaryProduct && product.importedProduct) {
      result = (price + (price * 0.25)) * quantity;
    } else if (product.necessaryProduct && product.importedProduct) {
      result = (price + (price * 0.05)) * quantity;
    }
    else {
      result = (price + (price * 0.2)) * quantity;
    }
    return this.arround(result);

  }
  arround(a: number) {
    return Math.round(a * 20) / 20;

  }

  calculeTotale() {
    return this.arround(this.facture.command.map(a => this.getPrixTTC(a.product, a.product.price, a.quantity)).reduce((a, b) => a + b));
  }
  calculeTotaleHorsTaxe() {
    return this.facture.command.map(a => this.getPrixHorsTaxe(a.product, a.product.price, a.quantity)).reduce((a, b) => a + b)
  }
  calculeTaxe() {
    return this.calculeTotale() - this.calculeTotaleHorsTaxe();
  }

}
