import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], filterText: string): Product[] {

    filterText = filterText?filterText.toLocaleLowerCase():"";
  
    return filterText?products.filter((k:Product)=>k.productName.toLocaleLowerCase().indexOf(filterText)!==-1):products;
    
  }

}
