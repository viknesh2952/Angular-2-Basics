import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maleorfemale'
})
export class MaleorfemalePipe implements PipeTransform {

  transform(value:string, gender:string): string {
    if(gender.toLowerCase() ==='male'){
      return "Mr."+ value;
    }
    else{
      return "Mrs."+ value;
    }
    
  }

}
