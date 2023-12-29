import * as mongoose from 'mongoose';
import { Priority } from 'src/common/enums/priority-type.enum';
import { Status } from 'src/common/enums/status-type.enum';

export const TaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
         required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: [Status.TODO, Status.IN_PROGRESS, Status.DONE],
        default: Status.TODO
    },
    priority: {
        type: String,
        enum: [Priority.HIGH, Priority.MEDIUM, Priority.LOW],
        default: Priority.LOW
    },
    dueDate: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});