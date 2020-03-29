import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return URL_SERVICES + value;
  }

}
