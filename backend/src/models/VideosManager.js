const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "videos" });
  }

  findAll(game) {
    let sql = `SELECT * FROM ${this.table}`;
    const sqlValues = [];

    if (game != null) {
      sql += " WHERE game_id = ?";
      sqlValues.push(game);
    }

    return this.database.query(sql, sqlValues);
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = VideosManager;
