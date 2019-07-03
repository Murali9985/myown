import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Output() door=new EventEmitter();
@Output() window=new EventEmitter();
status=false;
  obj2=[{}];
  ffff(obj){
    this.status=true;
    this.window.emit(this.status);
    this.obj2.push(obj.value);
    this.door.emit(this.obj2);
  }
}
