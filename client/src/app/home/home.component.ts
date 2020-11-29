import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breakpoint;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }

}
