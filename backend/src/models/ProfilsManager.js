const AbstractManager = require("./AbstractManager");

class ProfilsManager extends AbstractManager {
  constructor() {
    super({ table: "profils" });
  }

  findAll() {
    return this.database.query(
      `select p.id, p.firstname, p.lastname, p.src, u.email from ${this.table} p INNER JOIN users u ON u.id = p.user_id`
    );
  }

  find(id) {
    return this.database.query(
      `select p.id, p.firstname, p.lastname, p.src, u.email from ${this.table} p INNER JOIN users u ON u.id = p.user_id where p.id = ?`,
      [id]
    );
  }

  update(firstname, lastname, src, id) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ? , src = ? where id = ?`,
      [firstname, lastname, src, id]
    );
  }
}

module.exports = ProfilsManager;
