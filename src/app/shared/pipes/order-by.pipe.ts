import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: any[] | null, key: string, isAsc: boolean = false): any[] | null {
    if (!list) {
      return list;
    }
    const sorted = list.sort((o1: any, o2: any) => {
      if (o1[key] < o2[key]) {
        return -1;
      }
      if (o1[key] > o2[key]) {
        return 1;
      }
      return 0;
    });

    return isAsc ? sorted : sorted.reverse();

  }
}
