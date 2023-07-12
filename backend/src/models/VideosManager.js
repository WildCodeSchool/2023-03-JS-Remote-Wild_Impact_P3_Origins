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

  insert(video, gameId) {
    return this.database.query(
      `insert into ${this.table} (url, title, description, game_id, release_date) values(?, ?, ?, ?, NOW())`,
      [video.url, video.title, video.description, gameId]
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
