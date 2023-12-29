import { UserType } from "src/common/enums/user-type.enum";

export class User {
    _id?: string;
    username: string;
    password: string;
    email: string;
    type: UserType;
}
  