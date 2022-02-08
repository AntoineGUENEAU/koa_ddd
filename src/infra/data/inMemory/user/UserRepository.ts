import "reflect-metadata";
import {injectable} from "inversify";
import { UserRepositoryInterface } from "../../../../core/domain/user/UserRepositoryInterface";
import { User } from "../../../../core/domain/user/User";

const users: User[] = [
    {
        id: "id_1",
        firstname: "Antoine",
        lastname: "GUENEAU",
        login: "gueneau.antoine@gmail.com",
        password: 'test'
    } as User,
    {
        id: "id_2",
        firstname: "Jean",
        lastname: "DURAND",
        login: "j.durand@gmail.com",
        password: 'test2'
    } as User
];

@injectable()
export class UserRepository implements UserRepositoryInterface {
    async getByLogin(login: string): Promise<User> {
        return await users.find(user => user.login === login) as User;
    }
}
