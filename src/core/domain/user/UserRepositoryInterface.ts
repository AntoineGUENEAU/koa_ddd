import {User} from "./User";

export interface UserRepositoryInterface {
    getByLogin(login: string): Promise<User>;
}
