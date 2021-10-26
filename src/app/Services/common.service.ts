import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  totalStudent = 0;
  public age =15;
  public name = 'Jins'
  public totalStudent$ = new BehaviorSubject<number>(0);

  constructor() { }
  public ageUp(){
    this.age++;
  }
  /**
   * setTotalStudent
total:number   */
  public setTotalStudent(total:number) {
  this.totalStudent =total;
   this.totalStudent$.next(total);
  }
  /**
   * increamentStudent
   */
  public increamentStudent() {
  this.totalStudent++;
   this.totalStudent$.next(this.totalStudent);
  }
    
}

