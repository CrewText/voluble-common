"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = exports.NotEnoughCreditsError = exports.ResourceOutOfUserScopeError = exports.AuthorizationFailedError = exports.NotImplementedError = exports.InvalidParameterValueError = exports.ResourceNotFoundError = exports.UserAlreadyInOrgError = exports.UserNotInOrgError = exports.PluginFailedToSendError = exports.PluginInitFailedError = exports.PluginDoesNotExistError = exports.MessageFailedError = exports.MessageAlreadySentError = void 0;
var MessageAlreadySentError = /** @class */ (function (_super) {
    __extends(MessageAlreadySentError, _super);
    function MessageAlreadySentError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageAlreadySentError;
}(Error));
exports.MessageAlreadySentError = MessageAlreadySentError;
var MessageFailedError = /** @class */ (function (_super) {
    __extends(MessageFailedError, _super);
    function MessageFailedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageFailedError;
}(Error));
exports.MessageFailedError = MessageFailedError;
var PluginDoesNotExistError = /** @class */ (function (_super) {
    __extends(PluginDoesNotExistError, _super);
    function PluginDoesNotExistError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PluginDoesNotExistError;
}(Error));
exports.PluginDoesNotExistError = PluginDoesNotExistError;
var PluginInitFailedError = /** @class */ (function (_super) {
    __extends(PluginInitFailedError, _super);
    function PluginInitFailedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PluginInitFailedError;
}(Error));
exports.PluginInitFailedError = PluginInitFailedError;
var PluginFailedToSendError = /** @class */ (function (_super) {
    __extends(PluginFailedToSendError, _super);
    function PluginFailedToSendError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PluginFailedToSendError;
}(Error));
exports.PluginFailedToSendError = PluginFailedToSendError;
var UserNotInOrgError = /** @class */ (function (_super) {
    __extends(UserNotInOrgError, _super);
    function UserNotInOrgError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserNotInOrgError;
}(Error));
exports.UserNotInOrgError = UserNotInOrgError;
var UserAlreadyInOrgError = /** @class */ (function (_super) {
    __extends(UserAlreadyInOrgError, _super);
    function UserAlreadyInOrgError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserAlreadyInOrgError;
}(Error));
exports.UserAlreadyInOrgError = UserAlreadyInOrgError;
var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ResourceNotFoundError;
}(Error));
exports.ResourceNotFoundError = ResourceNotFoundError;
var InvalidParameterValueError = /** @class */ (function (_super) {
    __extends(InvalidParameterValueError, _super);
    function InvalidParameterValueError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidParameterValueError;
}(Error));
exports.InvalidParameterValueError = InvalidParameterValueError;
var NotImplementedError = /** @class */ (function (_super) {
    __extends(NotImplementedError, _super);
    function NotImplementedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotImplementedError;
}(Error));
exports.NotImplementedError = NotImplementedError;
var AuthorizationFailedError = /** @class */ (function (_super) {
    __extends(AuthorizationFailedError, _super);
    function AuthorizationFailedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthorizationFailedError;
}(Error));
exports.AuthorizationFailedError = AuthorizationFailedError;
var ResourceOutOfUserScopeError = /** @class */ (function (_super) {
    __extends(ResourceOutOfUserScopeError, _super);
    function ResourceOutOfUserScopeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ResourceOutOfUserScopeError;
}(Error));
exports.ResourceOutOfUserScopeError = ResourceOutOfUserScopeError;
var NotEnoughCreditsError = /** @class */ (function (_super) {
    __extends(NotEnoughCreditsError, _super);
    function NotEnoughCreditsError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotEnoughCreditsError;
}(Error));
exports.NotEnoughCreditsError = NotEnoughCreditsError;
var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalError;
}(Error));
exports.InternalError = InternalError;
// let Errors = {
//     MessageAlreadySentError,
//     MessageFailedError,
//     PluginDoesNotExistError,
//     PluginInitFailedError,
//     PluginFailedToSendError,
//     ResourceNotFoundError,
//     InvalidParameterValueError,
//     UserNotInOrgError,
//     UserAlreadyInOrgError,
//     NotImplementedError
// }
// module.exports = Errors
