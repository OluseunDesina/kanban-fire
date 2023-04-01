import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from "./task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input("task") task: Task | null = null;
  @Output("edit") edit = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

}
