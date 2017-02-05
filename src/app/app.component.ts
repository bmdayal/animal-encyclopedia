import { Component } from '@angular/core';
import {AnimalsService} from './services/animals.service';
import {UsersService} from './services/users.service';
import {AnimalModel} from './models/animal.model';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimalsService, UsersService, AnimalModel]
})
export class AppComponent {
  title = 'app works!';
}
