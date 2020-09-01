export declare class MessageAlreadySentError extends Error {
    constructor(m: string);
}
export declare class MessageFailedError extends Error {
    constructor(m: string);
}
export declare class PluginDoesNotExistError extends Error {
    constructor(m: string);
}
export declare class PluginInitFailedError extends Error {
    constructor(m: string);
}
export declare class PluginFailedToSendError extends Error {
    constructor(m: string);
}
export declare class UserNotInOrgError extends Error {
    constructor(m: string);
}
export declare class UserAlreadyInOrgError extends Error {
    constructor(m: string);
}
export declare class ResourceNotFoundError extends Error {
    constructor(m: string);
}
export declare class InvalidParameterValueError extends Error {
    constructor(m: string);
}
export declare class NotImplementedError extends Error {
    constructor(m: string);
}
export declare class AuthorizationFailedError extends Error {
    constructor(m: string);
}
export declare class ResourceOutOfUserScopeError extends Error {
    constructor(m: string);
}
export declare class NotEnoughCreditsError extends Error {
    constructor(m: string);
}
export declare class InternalError extends Error {
    constructor(m: string);
}
