"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
const authChecker = ({ context: { user } }, roles) => {
    console.log(roles, user);
    if (!user) {
        return false;
    }
    return user.roles.some(role => roles.includes(role));
};
exports.authChecker = authChecker;
