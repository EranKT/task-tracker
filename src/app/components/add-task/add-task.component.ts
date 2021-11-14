import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task'
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

@Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showNewTaskForm: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showNewTaskForm = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a name for the task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)
    this.text = '';
    this.day = '';
    this.reminder = false;

    this.uiService.toggleAddTask();

  }

}
