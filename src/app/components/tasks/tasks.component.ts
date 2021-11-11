import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

}
