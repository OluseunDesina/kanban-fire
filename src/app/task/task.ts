export interface Task {
  id?: string;
  title: string;
  description: string;
  uid: string
}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}
