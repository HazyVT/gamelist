export default class Game{
  
  private name: string;
  private image: string;
  private score: number;

  constructor(name: string, image: string, score: number) {
    this.name = name;
    this.image = image;
    this.score = score;
  }

  // GETTERS

  getName() {
    return this.name;
  }

  getImage() {
    return this.image;
  }

  getScore() {
    return this.score;
  }

}