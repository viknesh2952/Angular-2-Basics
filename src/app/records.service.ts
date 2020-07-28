import { Injectable } from '@angular/core';


interface Idata{
  name: string;
  gender: string;
}
@Injectable({
  providedIn: 'root'

})
export class RecordsService {

  constructor() {


   }

   getdata()
  {


    return[{
      name: 'Viki', gender: 'male'
    },
    {
      name: 'nanthini', gender: 'female'
    },
    {
      name: 'durai', gender: 'male'
    },
    {
      name: 'mala', gender: 'female'
    },
    {
      name: 'afrith', gender: 'male'
    },
    {
      name: 'arafath', gender: 'male'
    }
  ];

}


}
