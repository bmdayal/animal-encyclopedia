import { Component, OnInit } from '@angular/core';
import {AnimalsService} from '../../services/animals.service';

@Component({
  moduleId: module.id,
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent {
  
  message:string;

  constructor(private _animalService: AnimalsService) { 
    //this.message = this._animalService.getAllAnimals();
  }
}
