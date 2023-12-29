import * as mongoose from 'mongoose';
import { UserType } from 'src/common/enums/user-type.enum';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true,
        set(password: string) {
            // TODO: hash password
            return password;
        }

    },
    type: { 
        type: String, 
        required: true, 
        enum: Object.values(UserType)
    },
});
