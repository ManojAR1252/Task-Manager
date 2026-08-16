import { Component } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { TaskForm } from '../task-form/task-form';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskList, TaskForm],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  selectedTask: Task | null = null;

  editTask(task: Task) {
    this.selectedTask = task;
  }

  clearSelection() {
    this.selectedTask = null;
  }

}
