import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AnimalModel} from '../models/animal.model';

import 'rxjs/add/operator/map';

@Injectable()
export class AnimalsService {

  constructor(private _http: Http) { 
    console.log('Service is ready...');
  }

  addAnimal(animal: AnimalModel)
  {
      return "animal added " + animal.name + " " + animal.animalType;
  }

  updateAnimals(animal:AnimalModel){
    return "animal updated" + animal.name;
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
