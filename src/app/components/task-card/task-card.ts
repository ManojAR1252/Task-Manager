<div class="task-card">

  <div class="task-info">
    <h3>{{ task.title }}</h3>

    <span
      class="status-badge"
      [class.completed]="task.completed"
      [class.pending]="!task.completed">

      {{ task.completed ? 'Completed' : 'Pending' }}

    </span>
  </div>

  <div class="task-actions">

    <button
      class="btn-edit"
      (click)="editTask()">
      Edit
    </button>

    <button
      class="btn-delete"
      (click)="deleteTask()">
      Delete
    </button>

  </div>

</div>
