import { readFileSync } from 'fs';

export const loadGames = () => {
  const data = readFileSync('src/utils/games.json', 'utf8');
  const parseData = JSON.parse(data);
  return parseData;
};
