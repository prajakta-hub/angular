import { Component, OnInit } from '@angular/core';
import { checkAndUpdateTextDynamic } from '@angular/core/src/view/text';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public data = [{id:1,name:"prajakta"},{id:2,name:"sneha"}];
  public data2 = [];
   add = function(item) {
     console.log("add")
     if(!(this.data2.some(items => items.name == item.name)))
     {
      this.data2.push(item);
     }
     else{
      this.data2.splice(this.data2.indexOf(item), 1);
     }
   };
}
