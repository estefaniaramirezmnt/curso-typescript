import powers from '../data/powers';
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get powers():string { // return string
    return powers.find (power => power.id === this.powerId)?.desc || 'not found';
  }
}

export class Hero1{}
export class Hero2{}
export class Hero3{}