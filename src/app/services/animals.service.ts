import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AnimalsService {

  constructor(private _http: Http) { 
    console.log('Service is ready...');
  }

  addAnmals(animals: string)
  {}

  updateAnimals(id:number){
    return "animal updated" + id;
  }

  deleteAnimal(id:number){
    return "animal deleted" + id;
  }

  getAllAnimals(){
    //return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      //      .map(a=>a.json());
    return "list of all animals";
  }

  getAnimalById(id:number){
    return 
  }
}
