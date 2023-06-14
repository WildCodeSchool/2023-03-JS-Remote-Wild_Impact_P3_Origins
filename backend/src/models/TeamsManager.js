const AbstractManager = require("./AbstractManager");

class TeamsManager extends AbstractManager {
  constructor() {
    super({ table: "teams" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(name, acronym, src, alt) {
    return this.database.query(
      `insert into ${this.table} (name, acronym, src, alt) values (?, ?, ?, ?)`,
      [name, acronym, src, alt]
    );
  }

  update(name, acronym, src, alt, id) {
    return this.database.query(
      `update ${this.table} set name = ?, acronym = ?, src = ?, alt = ? where id = ?`,
      [name, acronym, src, alt, id]
    );
  }
}

module.exports = TeamsManager;
