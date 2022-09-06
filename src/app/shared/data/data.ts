import { invoice } from "../model/invoice"
import { Product } from "../model/product"


export const products: Product[] = [
    {
      name: 'livres',
      price: 12.49,
      necessaryProduct:false,
      importedProduct:false,
      isBook:true
    },
    {
      name: 'CD musical',
      price: 14.99,
      necessaryProduct:false,
      importedProduct:false,
      isBook:false
    },
    {
      name: 'barres de chocolat',
      price: 0.85,
      necessaryProduct:true,
      importedProduct:false,
      isBook:false
    },
    {
      name: 'boîtes de chocolats importée',
      price:   10,
      necessaryProduct:true,
      importedProduct:true,
      isBook:false
    },
    {
      name: 'flacons de parfum importé',
      price:   47.50,
      necessaryProduct:false,
      importedProduct:true,
      isBook:false
    },
    {
      name: 'flacons de parfum importé',
      price:   27.99,
      necessaryProduct:false,
      importedProduct:true,
      isBook:false
    }
  
  
  
    ,
    {
      name: 'flacon de parfum',
      price:   18.99,
      necessaryProduct:false,
      importedProduct:false,
      isBook:false
    },
    {
      name: 'boîtes de pilules contre la migraine',
      price:   9.75,
      necessaryProduct:true,
      importedProduct:false,
      isBook:false
    },
    {
      name: 'boîtes de chocolats importés',
      price:   11.25,
      necessaryProduct:true,
      importedProduct:true,
      isBook:false
    }
  ]

  export const billing: invoice[] = [



    {
      ID: 1,
      name:'Input 1',
      command: [
        {
          product: products[0],
          quantity: 2
        },
        {
          product: products[1],
          quantity: 1
        },
        {
          product: products[2],
          quantity: 3
        }
      ]
    },
    {
      ID: 2,
      name:'Input 2',
      command: [
        {
          product: products[3],
          quantity: 2
        },
        {
          product: products[4],
          quantity: 3
        }
      ]
    },
    {
      ID: 3,
      name:'Input 3',
      command: [
        {
          product: products[5],
          quantity: 2
        },
        {
          product: products[6],
          quantity: 1
        },
        {
          product: products[7],
          quantity: 3
        },
        {
          product: products[8],
          quantity: 2
        }
      ]
    }
  
  
  ]