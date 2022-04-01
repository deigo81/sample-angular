import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"shorten"
})
/**
 * Pipe that cuts a text given a value passed as parameter
 */
export class ShortenPipe implements PipeTransform{
    transform(value: any,limit:number ) {
        if(value.length >=limit) {
            return value.substr(0,limit) + " ...";
        }
            return  value;
        
    }


}