import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
        return items.filter( it => {
          console.log("inisde filter",it,searchText)
          return String(it.name).startsWith(searchText);
        });
   } 

}
