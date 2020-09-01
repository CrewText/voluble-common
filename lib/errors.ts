export class MessageAlreadySentError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, MessageAlreadySentError.prototype) } }
export class MessageFailedError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, MessageFailedError.prototype) } }
export class PluginDoesNotExistError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, PluginDoesNotExistError.prototype) } }
export class PluginInitFailedError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, PluginInitFailedError.prototype) } }
export class PluginFailedToSendError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, PluginFailedToSendError.prototype) } }
export class UserNotInOrgError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, UserNotInOrgError.prototype) } }
export class UserAlreadyInOrgError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, UserAlreadyInOrgError.prototype) } }
export class ResourceNotFoundError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, ResourceNotFoundError.prototype) } }
export class InvalidParameterValueError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, InvalidParameterValueError.prototype) } }
export class NotImplementedError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, NotImplementedError.prototype) } }
export class AuthorizationFailedError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, AuthorizationFailedError.prototype) } }
export class ResourceOutOfUserScopeError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, ResourceOutOfUserScopeError.prototype) } }
export class NotEnoughCreditsError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, NotEnoughCreditsError.prototype) } }
export class InternalError extends Error { constructor(m: string) { super(m); Object.setPrototypeOf(this, InternalError.prototype) } }
