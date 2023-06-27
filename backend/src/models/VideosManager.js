const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "videos" });
  }

  findAll() {
    return this.database.query(`
      select * from  ${this.table} `);
  }

  find(id) {
    return this.database.query(`SELECT * from ${this.table}  where id = ?`, [
      id,
    ]);
  }

  insert(video) {
    return this.database.query(
      `insert into ${this.table} (url,titre,description,release_date ) values(?, ?, ?, ?)`,
      [video.url, video.titre, video.description, video.release_date]
    );
  }

  update(video) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      video,
      video.id,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = VideosManager;
