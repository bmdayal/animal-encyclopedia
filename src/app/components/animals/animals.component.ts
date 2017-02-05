import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../../services/animals.service';
import {AnimalModel} from '../../models/animal.model';

@Component({
  moduleId: module.id,
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})

export class AnimalsComponent implements OnInit{
  
  animal:AnimalModel;
  message:string;

  constructor(private _animalService: AnimalsService) { 
    //this.message = this._animalService.getAllAnimals();
    
  }

  get()
  {

  }

  add(){
    //this.animal.name = "Panther";
    //this.animal.animalType = "Carnivorus"; 
    //this.animal.location = "North America";
    console.log(this.animal.name);
    this.message = this._animalService.addAnimal(this.animal);
  }

  update(animal: AnimalModel){
    this.message = this._animalService.updateAnimals(animal);
  }

  ngOnInit() {
    // we will initialize our form here
  }
}
