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

  update(teams) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      teams,
      teams.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = TeamsManager;
