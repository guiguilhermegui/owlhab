class TaskAPI {
  constructor(taskIndex) {
    this.taskIndex = taskIndex;
    this.taskElement = document.getElementById(`taskitem_${taskIndex}`);

    if (!this.taskElement) {
      throw new Error(`Task item with index ${taskIndex} does not exist`);
    }

    this.taskTextElement = this.taskElement.querySelector(`#tasktextlabel_${taskIndex}`);
    this.taskCompleteElement = this.taskElement.querySelector(`#taskcomplete_${taskIndex}`);
    this.freeTimeElement = this.taskElement.querySelector(`#freetimeslider_${taskIndex}`);
    this.subtasksElement = this.taskElement.querySelector(`#subtasks_${taskIndex}`);
  }
get taskText() {
    return this.taskTextElement.textContent;
  }

  set taskText(text) {
    this.taskTextElement.textContent = text;
  }

  get isChecked() {
    return this.taskCompleteElement.checked;
  }

  set isChecked(checked) {
    this.taskCompleteElement.checked = checked;
  }

  get freeTimeValue() {
    return parseInt(this.freeTimeElement.value);
  }

  set freeTimeValue(value) {
    this.freeTimeElement.value = value;
  }

  addSubtaskItem(text) {
    const subtaskElement = document.createElement('li');
    subtaskElement.textContent = text;
    this.subtasksElement.appendChild(subtaskElement);
  }

  removeSubtaskItem(index) {
    const subtaskElement = this.subtasksElement.children[index];
    this.subtasksElement.removeChild(subtaskElement);
  }
}
