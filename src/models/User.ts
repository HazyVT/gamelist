import Game from "./Game";

export default class User {

  private name: string;
  private hours: number;
  private games: number;
  private image: string;
  private biography: string;
  private game_list: Array<Game>;
  
  constructor(name: string, hours: number, games: number, game_list: Array<Game>, image: string, biography: string) {
    this.name = name;
    this.hours = hours;
    this.games = games;
    this.game_list = game_list;
    this.image = image;
    this.biography = biography;
  }

  // GETTERS

  getName() {
    return this.name;
  }

  getHours() {
    return this.hours;
  }

  getGames() {
    return this.games;
  }

  getGameList() {
    return this.game_list;
  }

  getImage() {
    return this.image;
  }

  getBiography() {
    return this.biography;
  }

  // SETTERS
  addGame(game: Game) {
    this.game_list.push(game);
  }

  setBiography(biography: string) {
    this.biography = biography;
  }
}