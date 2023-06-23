import PropTypes from "prop-types";

const videoType = {
  id: PropTypes.number,
  url: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  description: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  game_id: PropTypes.number,
};

export default videoType;
