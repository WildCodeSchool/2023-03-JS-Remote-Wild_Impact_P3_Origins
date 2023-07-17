const AbstractManager = require("./AbstractManager");

class VideosToTeamsManager extends AbstractManager {
  constructor() {
    super({ table: "videos_to_teams" });
  }

  findAllVideos(teamId) {
    return this.database.query(
      `select v.id, v.url, v.title, v.description, g.label as game from  ${this.table} vtt INNER JOIN videos v on v.id =vtt.video_id INNER JOIN teams t on t.id =vtt.team_id INNER JOIN games g ON v.game_id=g.id WHERE vtt.team_id = ? `,
      [teamId]
    );
  }
}

module.exports = VideosToTeamsManager;
