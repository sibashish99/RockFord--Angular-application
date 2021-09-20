import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  
  ImagePath: string;
  ImagePath1: string;
  ImagePath2: string;
  constructor() {
    this.ImagePath = '../assets/7.png',
    this.ImagePath1 = '../assets/8.png',
    this.ImagePath2 = '../assets/9.jpg'
   }

  ngOnInit(): void {
  }

}
