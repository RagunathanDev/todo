import { generateID } from "../Util/Util";

const gen = generateID();

export function Task(taskName) {
  this.id = gen.next().value;
  this.taskName = taskName;
  this.status = 0;
  this.date = new Date();
}

//export const Task = [];
