import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private apiUrl = "http://localhost:5000/tasks";

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
