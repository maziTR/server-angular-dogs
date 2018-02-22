import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Dog } from '../dog';
import { DogService } from '../dog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();

/* handle - to update in the parent*/
  @Output() addButtonClick : EventEmitter<Dog> = new EventEmitter(); 
  @Output() editButtonClick : EventEmitter<Dog> = new EventEmitter(); 

  constructor(private dogService: DogService) { }

  ngOnInit() {
    
  }

  isEditMode() {
    return this.dog.hasOwnProperty('id')
  }

  cancelEditMode() { 
    this.dog = new Dog();
  }

  updateDog() {
    this.editButtonClick.emit(this.dog);
  }

  addDog(){
    this.addButtonClick.emit(this.dog);
  }

}