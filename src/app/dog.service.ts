import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dog } from './dog';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DogService {
  dogs: Dog[];

  constructor(private http: HttpClient) {}

  getDogs() : Observable<Dog[]> {
    return this.http.get<Dog[]>('/api/dogs')
  }

  addDog(newDog: Dog) : Observable<Dog>{  
    return this.http.post<Dog>('/api/dogs', { dog: newDog });
  }

  editDog(dog : Dog) {
    return this.http.put<Dog>('/api/dogs/'+ dog.id, { dog });
  }

  deleteDog(dog : Dog): Observable<{}>{
  return this.http.delete<{}>('/api/dogs/' + dog.id );
  }
/* 
  generateId (): number {
  	return this.dogs[this.dogs.length - 1].id + 1;
  } */

}