import { Priority } from "src/common/enums/priority-type.enum";

export class Task {
   _id?: string;
    user: string;
    title: string;
    description: string;
    priority: Priority;
    dueDate: Date;
}
  