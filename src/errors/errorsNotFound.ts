import { ExtendableError } from "./genericError";

export class ResourceNotFound extends ExtendableError {
    data: Record<string, unknown>;

    constructor(resource: string, query: Record<string, unknown> | string) {
        super(`Resource ${resource} was not found.`);
        this.data = { resource, query };
    }
}
