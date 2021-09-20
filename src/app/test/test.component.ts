import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
   templateUrl: './test.component.html',
   styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


    ImagePath: string;
    ImagePath1: string;
    ImagePath2: string;
    ImagePath3: string;
    ImagePath4: string;
    constructor() {
      this.ImagePath = '../assets/1.png'
      this.ImagePath1 = '../assets/2.png'
      this.ImagePath2= '../assets/3.jpg'
      this.ImagePath3= '../assets/4.jpg'
      this.ImagePath4= '../assets/5.png'
    }

  ngOnInit(): void {
  }

}
