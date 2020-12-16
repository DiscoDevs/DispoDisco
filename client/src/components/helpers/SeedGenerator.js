const roboRoot = `https://robohash.org/`;
const roboParams = `?set=set5`;
const avatarSize = `&size=75x75`;
const avatarFile = `.png`;
const hash = () => Math.floor(Math.random() * 1000000).toString();
const generateNewAvatarUrl = (query = "") =>
  `${roboRoot}${hash()}${query}${avatarFile}${roboParams}${avatarSize}`;

export default generateNewAvatarUrl;
