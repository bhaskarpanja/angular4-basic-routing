import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser"; 

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  	constructor( private title: Title) 
  	{ 
     	this.title.setTitle('Work');
   	}

  ngOnInit() {
  }

}
