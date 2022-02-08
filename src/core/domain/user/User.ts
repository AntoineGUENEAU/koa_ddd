import {Entity} from "../Entity";

interface UserDto{
    id: string,
    login: string
    firstname: string
    lastname: string
    email: string
}

interface UserProps{
    id: string,
    login: string
    firstname: string
    lastname: string
    email: string
    password: string
}

export class User extends Entity<UserProps> {
    constructor(props: UserProps) {
        super(props, props.id)
    }

    public static create(props: UserProps): User {
        return new User(props)
    }

    public toDto(): UserDto {
        return {
            id: this.id,
            login: this.login,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email
        }
    }

    get id(): string {
        return this._id
    }

    get firstname(): string {
        return this.props.firstname
    }

    get lastname(): string {
        return this.props.lastname
    }

    get login(): string {
        return this.props.login
    }

    get email(): string {
        return this.props.email
    }

    get password(): string {
        return this.props.password
    }
}
