import {
    Sprite,
    Application,
    Rectangle,
    Text,
    Graphics,
    DisplayObject,
    Container

} from "pixi.js";

export class Card {
    sprite: Sprite;
    suit: number;
    value: number;

    constructor(suit: number, value: number) {
        this.suit = suit;
        this.value = value;
    }
}

let i: number = 0;
// i is suit
let j: number = 0;
// j is value

export let deck: Card[] = new Array<Card>();

for (i = 0; i < 4; i++) {
    for (j = 0; j < 13; j++) {
        let card: Card = new Card(i, j);
        deck[deck.length] = card;
    }
}

deck[0].sprite = Sprite.fromImage("./ace_hearts.png");
deck[1].sprite = Sprite.fromImage("./2_hearts.png");
deck[2].sprite = Sprite.fromImage("./3_hearts.png");
deck[3].sprite = Sprite.fromImage("./4_hearts.png");
deck[4].sprite = Sprite.fromImage("./5_hearts.png");
deck[5].sprite = Sprite.fromImage("./6_hearts.png");
deck[6].sprite = Sprite.fromImage("./7_hearts.png");
deck[7].sprite = Sprite.fromImage("./8_hearts.png");
deck[8].sprite = Sprite.fromImage("./9_hearts.png");
deck[9].sprite = Sprite.fromImage("./10_hearts.png");
deck[10].sprite = Sprite.fromImage("./jack_hearts.png");
deck[11].sprite = Sprite.fromImage("./queen_hearts.png");
deck[12].sprite = Sprite.fromImage("./king_hearts.png");

deck[13].sprite = Sprite.fromImage("./ace_diamonds.png");
deck[14].sprite = Sprite.fromImage("./2_diamonds.png");
deck[15].sprite = Sprite.fromImage("./3_diamonds.png");
deck[16].sprite = Sprite.fromImage("./4_diamonds.png");
deck[17].sprite = Sprite.fromImage("./5_diamonds.png");
deck[18].sprite = Sprite.fromImage("./6_diamonds.png");
deck[19].sprite = Sprite.fromImage("./7_diamonds.png");
deck[20].sprite = Sprite.fromImage("./8_diamonds.png");
deck[21].sprite = Sprite.fromImage("./9_diamonds.png");
deck[22].sprite = Sprite.fromImage("./10_diamonds.png");
deck[23].sprite = Sprite.fromImage("./jack_diamonds.png");
deck[24].sprite = Sprite.fromImage("./queen_diamonds.png");
deck[25].sprite = Sprite.fromImage("./king_diamonds.png");

deck[26].sprite = Sprite.fromImage("./ace_clubs.png");
deck[27].sprite = Sprite.fromImage("./2_clubs.png");
deck[28].sprite = Sprite.fromImage("./3_clubs.png");
deck[29].sprite = Sprite.fromImage("./4_clubs.png");
deck[30].sprite = Sprite.fromImage("./5_clubs.png");
deck[31].sprite = Sprite.fromImage("./6_clubs.png");
deck[32].sprite = Sprite.fromImage("./7_clubs.png");
deck[33].sprite = Sprite.fromImage("./8_clubs.png");
deck[34].sprite = Sprite.fromImage("./9_clubs.png");
deck[35].sprite = Sprite.fromImage("./10_clubs.png");
deck[36].sprite = Sprite.fromImage("./jack_clubs.png");
deck[37].sprite = Sprite.fromImage("./queen_clubs.png");
deck[38].sprite = Sprite.fromImage("./king_clubs.png");

deck[39].sprite = Sprite.fromImage("./ace_spades.png");
deck[40].sprite = Sprite.fromImage("./2_spades.png");
deck[41].sprite = Sprite.fromImage("./3_spades.png");
deck[42].sprite = Sprite.fromImage("./4_spades.png");
deck[43].sprite = Sprite.fromImage("./5_spades.png");
deck[44].sprite = Sprite.fromImage("./6_spades.png");
deck[45].sprite = Sprite.fromImage("./7_spades.png");
deck[46].sprite = Sprite.fromImage("./8_spades.png");
deck[47].sprite = Sprite.fromImage("./9_spades.png");
deck[48].sprite = Sprite.fromImage("./10_spades.png");
deck[49].sprite = Sprite.fromImage("./jack_spades.png");
deck[50].sprite = Sprite.fromImage("./queen_spades.png");
deck[51].sprite = Sprite.fromImage("./king_spades.png");