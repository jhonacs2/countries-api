import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstAttrLanguages'
})
export class GetFirstAttrLanguagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
