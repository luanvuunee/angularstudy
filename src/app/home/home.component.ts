import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name ="Jinn"
  public age;
  public games = ['Valorant','LOL','DOTA','PUBG']
  
  constructor(private commonService: CommonService) {
  this.age = commonService.age;
   }

  ngOnInit(): void {
  }
  /**
   * goName
   */
  public submitName() {
    alert("Your name is " + this.name);
  }
  /**
   * ageUp
   */
  public ageUp() {
    this.commonService.age++;
    this.age= this.commonService.age;

    
  }

}
  

