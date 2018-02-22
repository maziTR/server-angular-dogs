import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Dog[];
  title: string;
  selectedDog: Dog = new Dog();

  constructor(private dogService: DogService) { }

  ngOnInit() {
  	this.title = "Our dogs";
    this.dogService.getDogs()
    .subscribe(data => {
      this.dogs = data;
    })
  }

  addDog(dog:Dog){
    this.dogService.addDog(dog)
    .subscribe(data => {
      this.dogs.push(data);
    });
  }

  editDog(dog: Dog) {
   this.selectedDog = Object.assign({}, dog);
  }

  deleteDog(dog:Dog){
    let ind = this.dogs.findIndex(element => element.id == dog.id);
    this.dogService.deleteDog(dog)
    .subscribe(data => {
      this.dogs.splice(ind,1);
    });
  }

  updateDog(dog:Dog){
    this.dogService.editDog(dog)
     .subscribe(data => {
      let ind = this.dogs.findIndex(element => element.id == data.id);
      this.dogs[ind] = data;
    });
  }
  
}