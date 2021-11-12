import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../../task';
// import { TASKS } from '../../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 private apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]> (this.apiUrl);
  }
}
