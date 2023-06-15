const AbstractManager = require("./AbstractManager");

class GamesManager extends AbstractManager {
  constructor() {
    super({ table: "games" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from ${this.table} where id = ?`, [id]);
  }

  insert(label, acronyme, src, alt, logo) {
    return this.database.query(
      `insert into ${this.table} (label, acronyme, src, alt, logo) values (?, ?, ?, ?, ?)`,
      [label, acronyme, src, alt, logo]
    );
  }
}

module.exports = GamesManager;
