import "dotenv/config";

export const BCRYPT_SALT: number = parseInt(process.env.BCRYPT_SALT || "10");
