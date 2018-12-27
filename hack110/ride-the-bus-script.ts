import "introcs";

import {
    Sprite,
    Application,
    Text,
    Graphics,

} from "pixi.js";

import { Card, deck } from "./card-script";



const app: Application = new Application(686, 507);
document.body.appendChild(app.view);

let background: Sprite = Sprite.fromImage("./Wood-Background.jpg");
app.stage.addChild(background);




let cardBack: Sprite = Sprite.fromImage("./playing-card-back.jpg");
cardBack.scale.x = 0.18;
cardBack.scale.y = 0.18;
cardBack.x = 30;
cardBack.y = 250;

let cardBack2: Sprite = Sprite.fromImage("./playing-card-back.jpg");
cardBack2.scale.x = 0.18;
cardBack2.scale.y = 0.18;
cardBack2.x = 195;
cardBack2.y = 250;

let cardBack3: Sprite = Sprite.fromImage("./playing-card-back.jpg");
cardBack3.scale.x = 0.18;
cardBack3.scale.y = 0.18;
cardBack3.x = 355;
cardBack3.y = 250;

let cardBack4: Sprite = Sprite.fromImage("./playing-card-back.jpg");
cardBack4.scale.x = 0.18;
cardBack4.scale.y = 0.18;
cardBack4.x = 520;
cardBack4.y = 250;



let r1: boolean = false;
let r2: boolean = false;
let r3: boolean = false;
let r4: boolean = false;



// ROUND ONE


let r1Instruction: Text = new Text("Is your first card red or black?");
r1Instruction.x = 180;
r1Instruction.y = 50;
r1Instruction.style.fill = 0xffffff;
r1Instruction.style.fontFamily = "Big Caslon";


let red: boolean = true;



let redMessageBox: Graphics = new Graphics;
redMessageBox.beginFill(0xFF0000, 1);
redMessageBox.drawRect(0, 0, 150, 100);
redMessageBox.x = 100;
redMessageBox.y = 100;
redMessageBox.interactive = true;
redMessageBox.buttonMode = true;
redMessageBox.on("click", (e: MouseEvent) => {
    red = true;
    round(e);
});

let blackMessageBox: Graphics = new Graphics();
blackMessageBox.beginFill(0x000000, 1);
blackMessageBox.drawRect(0, 0, 150, 100);
blackMessageBox.x = 450;
blackMessageBox.y = 100;
blackMessageBox.interactive = true;
blackMessageBox.buttonMode = true;
blackMessageBox.on("click", (e: MouseEvent) => {
    red = false;
    round(e);
});




export function startR1(): void {

    r1 = true;

    app.stage.addChild(cardBack);
    app.stage.addChild(cardBack2);
    app.stage.addChild(cardBack3);
    app.stage.addChild(cardBack4);

    app.stage.addChild(redMessageBox);
    app.stage.addChild(blackMessageBox);
    app.stage.addChild(r1Instruction);

}


// ROUND TWO

let r2Instruction: Text = new Text("Is your second card higher or lower than your first card?");
r2Instruction.x = 120;
r2Instruction.y = 50; 
r2Instruction.style.fill = 0xffffff;
r2Instruction.style.fontFamily = "Big Caslon";
r2Instruction.style.fontSize = 20;


let higher: boolean = true;


let highMessage: Text = new Text("Higher");
let highMessageBox: Graphics = new Graphics;
highMessage.x = 135;
highMessage.y = 130;
highMessage.style.fill = 0xc6e2ff;
highMessage.style.fontFamily = "Big Caslon";
highMessageBox.x = 100;
highMessageBox.y = 100;
highMessageBox.beginFill(0x0a2c74, 1);
highMessageBox.drawRect(0, 0, 150, 100);
highMessageBox.interactive = true;
highMessageBox.buttonMode = true;
highMessageBox.on("click", (e: MouseEvent) => {
    higher = true;
    round(e);
});

let lowMessage: Text = new Text("Lower");
let lowMessageBox: Graphics = new Graphics;
lowMessage.x = 485;
lowMessage.y = 130;
lowMessage.style.fill = 0xc6e2ff;
lowMessage.style.fontFamily = "Big Caslon";
lowMessageBox.x = 450;
lowMessageBox.y = 100;
lowMessageBox.beginFill(0x0a2c74, 1);
lowMessageBox.drawRect(0, 0, 150, 100);
lowMessageBox.interactive = true;
lowMessageBox.buttonMode = true;
lowMessageBox.on("click", (e: MouseEvent) => {
    higher = false;
    round(e);
});




export function startR2(): void {

    r2 = true;

    app.stage.removeChild(redMessageBox);
    app.stage.removeChild(blackMessageBox);
    app.stage.removeChild(r1Instruction);

    app.stage.addChild(r2Instruction);
    app.stage.addChild(highMessageBox);
    app.stage.addChild(lowMessageBox);
    app.stage.addChild(highMessage);
    app.stage.addChild(lowMessage);
    
}


// ROUND 3

let r3Instruction: Text = new Text("Is the value of your third card inside or outside the values of your first two cards?");
r3Instruction.x = 30;
r3Instruction.y = 50;
r3Instruction.style.fill = 0xffffff;
r3Instruction.style.fontFamily = "Big Caslon";
r3Instruction.style.fontSize = 20;

let inside: boolean = true;


let inMessage: Text = new Text("Inside");
let inMessageBox: Graphics = new Graphics;
inMessage.x = 135;
inMessage.y = 130;
inMessage.style.fill = 0xbce191;
inMessage.style.fontFamily = "Big Caslon";
inMessageBox.x = 100;
inMessageBox.y = 100;
inMessageBox.beginFill(0x218312, 1);
inMessageBox.drawRect(0, 0, 150, 100);
inMessageBox.interactive = true;
inMessageBox.buttonMode = true;
inMessageBox.on("click", (e: MouseEvent) => {
    inside = true;
    round(e);
});

let outMessage: Text = new Text("Outside");
let outMessageBox: Graphics = new Graphics;
outMessage.x = 480;
outMessage.y = 130;
outMessage.style.fill = 0xbce191;
outMessage.style.fontFamily = "Big Caslon";
outMessageBox.x = 450;
outMessageBox.y = 100;
outMessageBox.beginFill(0x218312, 1);
outMessageBox.drawRect(0, 0, 150, 100);
outMessageBox.interactive = true;
outMessageBox.buttonMode = true;
outMessageBox.on("click", (e: MouseEvent) => {
    inside = false;
    round(e);
});



export function startR3(): void {

    r3 = true;

    app.stage.removeChild(highMessage);
    app.stage.removeChild(highMessageBox);
    app.stage.removeChild(lowMessage);
    app.stage.removeChild(lowMessageBox);
    app.stage.removeChild(r2Instruction);

    app.stage.addChild(r3Instruction);
    app.stage.addChild(inMessageBox);
    app.stage.addChild(outMessageBox);
    app.stage.addChild(inMessage);
    app.stage.addChild(outMessage);

}


// ROUND 4 (Final Round)

let r4Instruction: Text = new Text("What is the suit of your last card?");
r4Instruction.x = 210;
r4Instruction.y = 50;
r4Instruction.style.fill = 0xffffff;
r4Instruction.style.fontFamily = "Big Caslon";
r4Instruction.style.fontSize = 22;

let hearts: boolean = true; 
let spades: boolean = true; 


let heartMessage: Text = new Text("Hearts");
let heartBox: Graphics = new Graphics;
heartMessage.x = 55;
heartMessage.y = 120;
heartMessage.style.fill = 0xffffff;
heartMessage.style.fontFamily = "Big Caslon";
heartBox.x = 35;
heartBox.y = 100;
heartBox.beginFill(0xff0000, 1);
heartBox.drawRect(0, 0, 120, 75);
heartBox.interactive = true;
heartBox.buttonMode = true;
heartBox.on("click", (e: MouseEvent) => {
    red = true;
    hearts = true;
    round(e);
});


let diamondMessage: Text = new Text("Diamonds");
let diamondBox: Graphics = new Graphics;
diamondMessage.x = 205;
diamondMessage.y = 120;
diamondMessage.style.fill = 0xff0000;
diamondMessage.style.fontFamily = "Big Caslon";
diamondBox.x = 200;
diamondBox.y = 100;
diamondBox.beginFill(0xffffff, 1);
diamondBox.drawRect(0, 0, 120, 75);
diamondBox.interactive = true;
diamondBox.buttonMode = true;
diamondBox.on("click", (e: MouseEvent) => {
    red = true;
    hearts = false;
    round(e);
});


let spadeMessage: Text = new Text("Spades");
let spadeBox: Graphics = new Graphics;
spadeMessage.x = 380;
spadeMessage.y = 120;
spadeMessage.style.fill = 0xffffff;
spadeMessage.style.fontFamily = "Big Caslon";
spadeBox.x = 360;
spadeBox.y = 100;
spadeBox.beginFill(0x000000, 1);
spadeBox.drawRect(0, 0, 120, 75);
spadeBox.interactive = true;
spadeBox.buttonMode = true;
spadeBox.on("click", (e: MouseEvent) => {
    red = false;
    spades = true;
    round(e);
});



let clubMessage: Text = new Text ("Clubs");
let clubBox: Graphics = new Graphics;
clubMessage.x = 550;
clubMessage.y = 120;
clubMessage.style.fill = 0x000000;
clubMessage.style.fontFamily = "Big Caslon";
clubBox.x = 525;
clubBox.y = 100;
clubBox.beginFill(0xffffff, 1);
clubBox.drawRect(0, 0, 120, 75);
clubBox.interactive = true;
clubBox.buttonMode = true;
clubBox.on("click", (e: MouseEvent) => {
    red = false;
    spades = false;
    round(e);
});



export function startR4(): void {

    r4 = true;

    app.stage.removeChild(inMessage);
    app.stage.removeChild(inMessageBox);
    app.stage.removeChild(outMessage);
    app.stage.removeChild(outMessageBox);
    app.stage.removeChild(r3Instruction);

    app.stage.addChild(r4Instruction);
    app.stage.addChild(heartBox);
    app.stage.addChild(diamondBox);
    app.stage.addChild(spadeBox);
    app.stage.addChild(clubBox);
    app.stage.addChild(heartMessage);
    app.stage.addChild(diamondMessage);
    app.stage.addChild(spadeMessage);
    app.stage.addChild(clubMessage);

}


// FUNCTIONS

let onDeck: Card[] = [];


export function round(e: MouseEvent): void {

    let a: number = Math.floor(Math.random() * 4);

    let b: number = Math.floor(Math.random() * 13);
        
    let card: Card = new Card(a, b);
    onDeck[onDeck.length] = card;

    
    for (let i: number = 0; i < deck.length; i++) {
        if (a === deck[i].suit && b === deck[i].value) {
            app.stage.addChild(deck[i].sprite);
            deck[i].sprite.scale.x = 0.7;
            deck[i].sprite.scale.y = 0.7;
            if (r1 === true && r2 === false) {
                deck[i].sprite.x = 30;
            } else if (r2 === true && r3 === false) {
                deck[i].sprite.x = 195;
            } else if (r3 === true && r4 === false) {
                deck[i].sprite.x = 355;
            } else if (r4 === true) {
                deck[i].sprite.x = 520;
            }
            deck[i].sprite.y = 250;
           
        }
    }


    function handleResult(): void {
        if (r1 === true && r2 !== true) {
            if (red === true) {
                if (a < 2) {
                    alert ("Correct! Round 2?");
                    startR2();
                } else {
                    alert ("Wrong! Try again.");
                    resetRound();
                }
            } else {
                if (a > 1) {
                    alert ("Correct! Round 2?");
                    startR2();
                } else {
                    alert ("Wrong! Try again.");
                    resetRound();
                }
            }
        } else if (r2 === true && r3 !== true) {
            if (higher === true) {
                if (onDeck[1].value > onDeck[0].value) {
                    alert ("Correct! Round 3?");
                    startR3();
                } else if (onDeck[1].value <= onDeck[0].value) {
                    alert ("Wrong! Back to Round 1...");
                    resetRound();
                } else {
                    print ("Failed higher");
                }

            } else if (higher === false) {
                if (onDeck[1].value < onDeck[0].value) {
                    alert ("Correct! Round 3?");
                    startR3();
                } else if (onDeck[1].value >= onDeck[0].value) {
                    alert ("Wrong! Back to Round 1...");
                    resetRound();
                } else {
                    print ("Failed lower");
                }
            }
        } else if (r3 === true && r4 !== true) {
            if (inside === true) {
                if (onDeck[1].value > onDeck[0].value) {
                    if (onDeck[2].value <= onDeck[1].value) {
                        if (onDeck[2].value >= onDeck[0].value) {
                            alert ("Correct! Round 4?");
                            startR4();
                        } else {
                            alert ("Wrong! Back to Round 1...");
                            resetRound();
                        }
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                } else {
                    if (onDeck[2].value >= onDeck[1].value) {
                        if (onDeck[2].value <= onDeck[0].value) {
                            alert ("Correct! Round 4?");
                            startR4();
                        } else {
                            alert ("Wrong! Back to Round 1...");
                            resetRound();
                        }
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                }
            } else if (inside === false) {
                if (onDeck[1].value > onDeck[0].value) {
                // if card 2 is greater than card 1
                    if (onDeck[2].value > onDeck[1].value) {
                        alert ("Correct! Final Round?");
                        startR4();
                    } else if (onDeck[2].value < onDeck[0].value ) {
                        alert ("Correct! Final Round!");
                        startR4();
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                } else {
                // if card 2 is less than card 1
                    if (onDeck[2].value < onDeck[1].value) {
                    // if card 3 is less than card 2
                        alert ("Correct! Round 4?");
                        startR4();
                    } else if (onDeck[2].value > onDeck[0].value) {
                        alert ("Correct! Final Round!");
                        startR4();
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                }
            }
        } else if (r4 === true) {
            if (red === true) {
                if (hearts === true) {
                    if (a === 0) {
                        alert ("Congratulations!! You won! Press OK to ride the bus again.")
                        resetRound();
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                } else {
                // if hearts is not true
                    if (a === 1) {
                        alert ("Congratulations!! You won! Press OK to ride the bus again.")
                        resetRound();
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                } 
            } else if (red === false) {
                if (spades === true) {
                    if (a === 3) {
                        alert ("Congratulations!! You won! Press OK to ride the bus again.")
                        resetRound();
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                } else {
                // if spades is not true
                    if (a === 2) {
                        alert ("Congratulations!! You won! Press OK to ride the bus again.")
                        resetRound();
                    } else {
                        alert ("Wrong! Back to Round 1...");
                        resetRound();
                    }
                }
            }
        }
        
    }

    function waitAlert(): void {
    setTimeout(handleResult, 250);
    }

    waitAlert();
}


export function resetRound(): void {
    onDeck = [];

    r2 = false;
    r3 = false;
    r4 = false;

    app.stage.removeChild(r2Instruction);
    app.stage.removeChild(r3Instruction);
    app.stage.removeChild(r4Instruction);

    app.stage.removeChild(heartMessage);
    app.stage.removeChild(heartBox);
    app.stage.removeChild(diamondBox);
    app.stage.removeChild(diamondMessage);
    app.stage.removeChild(spadeMessage);
    app.stage.removeChild(spadeBox);
    app.stage.removeChild(clubMessage);
    app.stage.removeChild(clubBox);

    setTimeout(main, 250);
}




export function main(): void {
    startR1(); 
}


main();
