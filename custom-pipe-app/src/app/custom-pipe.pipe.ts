import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
/**
 *  Pipe that receives three parameters, the first is the object to be processed,
 *  the second is the text by which to filter and 
 *  the third is the field by which the second is to be purchased.
 *  This pipe is used at runtime
 */
export class CustomPipe implements PipeTransform {

  transform(value: any,filterString:string,propName:string): any {
    const resultArray=[];
    if(value.length === 0 || filterString ===''){
      return value;
    }
    for(const item of value) {
    
      if(item[propName]=== filterString){
        resultArray.push(item);
      }
    
    }
    return resultArray;
  }

}
