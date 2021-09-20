import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  ImagePath: string;

  constructor() { 
    this.ImagePath = '../assets/10.jpg'
  
  }

  ngOnInit(): void {
  }

}
