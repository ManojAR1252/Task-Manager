import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {

  @Input() taskToEdit: Task | null = null;
  @Output() formSubmitted = new EventEmitter<void>();

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      completed: [false]
    });
  }

  submit() {

    if (this.taskForm.invalid) return;

    const formValue = this.taskForm.value;

    if (this.taskToEdit) {

      this.taskService.updateTask({
        ...this.taskToEdit,
        title: formValue.title!,
        completed: formValue.completed!
      });

    } else {

      this.taskService.addTask(formValue.title!);

    }

    this.cancel();
  }

  cancel() {
    this.taskForm.reset({
      title: '',
      completed: false
    });

    this.formSubmitted.emit();
  }
}
