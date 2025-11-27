import db from "../database/db";
import { User } from "../models/user.model";

export const createUser = (user: User): User => {
  const stmt = db.prepare(`
    INSERT INTO users (id, profile, subscription)
    VALUES (?, ?, ?)
  `);

  stmt.run(
    user.id,
    JSON.stringify(user.profile),
    JSON.stringify(user.subscription)
  );

  return user;
};

export const getUserById = (id: string): User | null => {
  const row = db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);

  if (!row) return null;

  return {
    id: row.id,
    profile: JSON.parse(row.profile),
    subscription: JSON.parse(row.subscription),
  };
};