import { Component, OnInit } from '@angular/core';
import { book } from "./book";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-textbook-buy',
  templateUrl: './textbook-buy.component.html',
  styleUrls: ['./textbook-buy.component.css']
})
export class TextbookBuyComponent implements OnInit {

  booksArray:Array<book> = [
    new book("csc373", 123456789, 48.24),
    new book("csc373", 123456789, 48.24),
    new book("csc321", 987654321, 72.97)
  ];

  error:String = "";
  submit:boolean = null;

  courseSection = new FormControl("");
  cS = this.courseSection.value;


    searchDB(){
      for(let b of this.booksArray){
        console.log(this.cS)
      }
    }


  constructor() {}
  ngOnInit() {}
}
