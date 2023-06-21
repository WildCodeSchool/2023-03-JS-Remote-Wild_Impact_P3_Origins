const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }

  insertProfils(profil, userId) {
    return this.database.query(
      `INSERT INTO profils (firstname, lastname, src, user_id) values (?, ?, ?, ?)`,
      [profil.firstname, profil.lastname, profil.src, userId]
    );
  }

  findUser(email) {
    return this.database.query(
      `select password, role from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = AuthManager;
