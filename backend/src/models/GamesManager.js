const AbstractManager = require("./AbstractManager");

class GamesManager extends AbstractManager {
  constructor() {
    super({ table: "games" });
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

module.exports = GamesManager;
