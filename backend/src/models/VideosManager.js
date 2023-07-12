const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "videos" });
  }

  findAll() {
    return this.database.query(`
      select id, url, title, description, game_id, DATE_FORMAT(release_date , '%d-%c-%y %T') as release_date from  ${this.table} `);
  }

  find(id) {
    return this.database.query(
      `SELECT id, url, title, description, game_id, DATE_FORMAT(release_date , '%d-%c-%y %T') as release_date from ${this.table}  where id = ?`,
      [id]
    );
  }

  insert(video, gameId) {
    return this.database.query(
      `insert into ${this.table} (url, title, description, game_id, release_date) values(?, ?, ?, ?, NOW())`,
      [video.url, video.title, video.description, gameId]
    );
  }

  update(video, videoId) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      video,
      videoId,
    ]);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = VideosManager;
