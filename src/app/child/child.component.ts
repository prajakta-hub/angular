import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() showMePartially: boolean;
  emails = ["email1"];
  emailNumber = 1;
  addInputEmail() {
    this.emailNumber++; 
    this.emails.push("email"+this.emailNumber)
  }
}
