import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = new BehaviorSubject<Task[]>([
    { id: '1', title: 'Learn Angular Services', completed: false },
    { id: '2', title: 'Build Task Manager', completed: true },
    { id: '3', title: 'Practice RxJS', completed: false }
  ]);

  getTasks() {
    return this.tasks.asObservable();
  }

  addTask(title: string) {

    const currentTasks = this.tasks.value;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false
    };

    this.tasks.next([...currentTasks, newTask]);
  }

  updateTask(updatedTask: Task) {

    const updated = this.tasks.value.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );

    this.tasks.next(updated);
  }

  deleteTask(id: string) {

    const filtered = this.tasks.value.filter(
      task => task.id !== id
    );

    this.tasks.next(filtered);
  }
}
