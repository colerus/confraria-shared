"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BCRYPT_SALT = void 0;
require("dotenv/config");
exports.BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT || "10");
//# sourceMappingURL=config.js.map