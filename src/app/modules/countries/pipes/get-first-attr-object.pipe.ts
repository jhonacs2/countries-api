import { Pipe, PipeTransform } from '@angular/core';
import { Gmd } from '../interfaces/country-data-response.interface';

@Pipe({
  name: 'getFirstAttrCurrencyObject'
})
export class GetFirstAttrCurrencyObjectPipe implements PipeTransform {

  transform( value: any ): string {
    const  currency = (Object.values(value)[0]) as Gmd;
    return currency.name;
  }

}
