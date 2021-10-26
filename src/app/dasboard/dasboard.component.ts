import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  notifications =0;
  showSnipper =false;

  constructor() { }

  ngOnInit(): void {
  }
  load() {
    this.showSnipper =true;
    setTimeout(() => {
      this.showSnipper = false;
    },3000)
  }

}
