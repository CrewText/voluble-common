"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = exports.NotEnoughCreditsError = exports.ResourceOutOfUserScopeError = exports.AuthorizationFailedError = exports.NotImplementedError = exports.InvalidParameterValueError = exports.ResourceNotFoundError = exports.UserAlreadyInOrgError = exports.UserNotInOrgError = exports.PluginFailedToSendError = exports.PluginInitFailedError = exports.PluginDoesNotExistError = exports.MessageFailedError = exports.MessageAlreadySentError = void 0;
class MessageAlreadySentError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, MessageAlreadySentError.prototype); }
}
exports.MessageAlreadySentError = MessageAlreadySentError;
class MessageFailedError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, MessageFailedError.prototype); }
}
exports.MessageFailedError = MessageFailedError;
class PluginDoesNotExistError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, PluginDoesNotExistError.prototype); }
}
exports.PluginDoesNotExistError = PluginDoesNotExistError;
class PluginInitFailedError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, PluginInitFailedError.prototype); }
}
exports.PluginInitFailedError = PluginInitFailedError;
class PluginFailedToSendError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, PluginFailedToSendError.prototype); }
}
exports.PluginFailedToSendError = PluginFailedToSendError;
class UserNotInOrgError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, UserNotInOrgError.prototype); }
}
exports.UserNotInOrgError = UserNotInOrgError;
class UserAlreadyInOrgError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, UserAlreadyInOrgError.prototype); }
}
exports.UserAlreadyInOrgError = UserAlreadyInOrgError;
class ResourceNotFoundError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, ResourceNotFoundError.prototype); }
}
exports.ResourceNotFoundError = ResourceNotFoundError;
class InvalidParameterValueError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, InvalidParameterValueError.prototype); }
}
exports.InvalidParameterValueError = InvalidParameterValueError;
class NotImplementedError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, NotImplementedError.prototype); }
}
exports.NotImplementedError = NotImplementedError;
class AuthorizationFailedError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, AuthorizationFailedError.prototype); }
}
exports.AuthorizationFailedError = AuthorizationFailedError;
class ResourceOutOfUserScopeError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, ResourceOutOfUserScopeError.prototype); }
}
exports.ResourceOutOfUserScopeError = ResourceOutOfUserScopeError;
class NotEnoughCreditsError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, NotEnoughCreditsError.prototype); }
}
exports.NotEnoughCreditsError = NotEnoughCreditsError;
class InternalError extends Error {
    constructor(m) { super(m); Object.setPrototypeOf(this, InternalError.prototype); }
}
exports.InternalError = InternalError;
