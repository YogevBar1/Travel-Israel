import StatusCode from "./status-code";

// Base class:
abstract class ClientError {
    constructor(public status: number, public message: string) { }
}

export class ValidationError extends ClientError {
    constructor(message: string) {
        super(StatusCode.BadRequest, message);
    }
}

export class UnauthorizedError extends ClientError {
    constructor(message: string) {
        super(StatusCode.Unauthorized, message);
    }
}

export class RouteNotFoundError extends ClientError {
    constructor(route: string) {
        super(StatusCode.NotFound, `Route ${route} not found.`);
    }
}

export class ResourceNotFoundError extends ClientError {
    constructor(_id: string) {
        super(StatusCode.NotFound, `_id ${_id} not exist.`);
    }
}
