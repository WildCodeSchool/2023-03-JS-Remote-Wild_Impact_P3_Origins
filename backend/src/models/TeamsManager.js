const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
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

  //   insert(item) {
  //     return this.database.query(`insert into ${this.table} (title) values (?)`, [
  //       item.title,
  //     ]);
  //   }

  //   update(item) {
  //     return this.database.query(
  //       `update ${this.table} set title = ? where id = ?`,
  //       [item.title, item.id]
  //     );
  //   }
}

module.exports = VideosManager;
