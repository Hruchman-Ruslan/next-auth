import db from "./db";

import { User } from "@/types/user";

export function createUser(email: string, password: string) {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES(?, ?)")
    .run(email, password);

  return result.lastInsertRowid;
}

export function getUserByEmail(email: string) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as
    | User
    | undefined;
}
