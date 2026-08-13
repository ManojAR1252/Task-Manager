import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';
@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Fix API integration',
      priority: 'High',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Design new user icons',
      priority: 'Medium',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Update documentation',
      priority: 'Low',
      status: 'Pending'
    }
  ];
}