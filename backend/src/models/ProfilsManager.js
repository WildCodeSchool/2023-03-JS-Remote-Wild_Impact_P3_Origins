const AbstractManager = require("./AbstractManager");

class ProfilsManager extends AbstractManager {
  constructor() {
    super({ table: "profils" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ProfilsManager;
