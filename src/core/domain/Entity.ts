import UniqueEntityID from 'cuid'

export abstract class Entity<T> {
    protected readonly _id: string
    protected props: T
    protected constructor(props: T, id?: string) {
        this._id = id ? id : UniqueEntityID()
        this.props = props
    }
}
