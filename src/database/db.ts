import Database from "better-sqlite3";

// Ouvre ou crée la base app.db
const db = new Database("app.db");

// Création de la table users (si pas encore créée)
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    profile TEXT NOT NULL,
    subscription TEXT NOT NULL
  );
`);

export default db;