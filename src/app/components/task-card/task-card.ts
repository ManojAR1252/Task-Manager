import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCard {

  @Input() task!: Task;

  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();

  editTask() {
    this.edit.emit(this.task);
  }

  deleteTask() {
    this.delete.emit(this.task.id);
  }

}
