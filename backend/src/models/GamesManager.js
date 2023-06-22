const AbstractManager = require("./AbstractManager");

class GamesManager extends AbstractManager {
  constructor() {
    super({ table: "games" });
  }

  findAll() {
    return this.database.query(`select * from ${this.table}`);
  }

  find(id) {
    return this.database.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(label, acronyme, src, alt, logo) {
    return this.database.query(
      `insert into ${this.table} (label, acronyme, src, alt, logo) values (?, ?, ?, ?, ?)`,
      [label, acronyme, src, alt, logo]
    );
  }

  update(games) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      games,
      games.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = GamesManager;
