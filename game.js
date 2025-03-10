const Letters = ['a', 'b', 'c'];
const Numbers = [1, 2, 3];

const BasicCombinations = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"]
]

const DocumentCombinaions = BasicCombinations.map(Combination => {
    return Combination.map(square => {
        return document.getElementById(square);
    })
})

let player = 0;
let XWins = 0;
let OWins = 0;
let Won = false;

const O = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none"> <path d="M393 946 c-83 -20 -159 -65 -221 -130 -174 -182 -174 -450 0 -632 183 -191 474 -191 656 0 180 189 175 465 -12 644 -117 112 -270 155 -423 118z m226 -85 c216 -67 322 -314 224 -524 -59 -126 -177 -206 -318 -215 -215 -14 -389 139 -403 353 -17 272 235 468 497 386z"></path> </g> </svg>`;

const X = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,100.000000) scale(0.050000,-0.050000)" fill="#0000ff" stroke="none"> <path d="M0 1935 c0 -58 47 -112 435 -500 l435 -435 -435 -435 c-388 -388 -435 -442 -435 -500 0 -164 89 -106 565 370 l435 435 435 -435 c388 -388 442 -435 500 -435 164 0 106 89 -370 565 l-435 435 435 435 c476 476 534 565 370 565 -58 0 -112 -47 -500 -435 l-435 -435 -435 435 c-476 476 -565 534 -565 370z"></path> </g> </svg>`;

const click = id => {
    if (Won == true) {
        for (let i = 0; i < Letters.length; i++) {
            for (let j = 0; j < Numbers.length; j++) {
                document.getElementById(Letters[i] + Numbers[j]).innerHTML = "";
            }
        }
        Won = false;
        player = 0;
        return;
    }
    const currentSquare = document.getElementById(id);
    if (currentSquare.innerHTML === '') {
        if (currentSquare.innerHTML = player === 0) {
            currentSquare.innerHTML = O;
        } else {
            currentSquare.innerHTML = X;
        };
        player = player === 0 ? 1 : 0;
        const CheckWin = () => {
            for (let i = 0; i < DocumentCombinaions.length; i++) {
                const Combination = DocumentCombinaions[i];
                const IsX = Combination.every(item => item.innerHTML.includes(X));
                const IsO = Combination.every(item => item.innerHTML.includes(O));
                if (IsX) {
                    console.log('X wins');
                    XWins++;
                    document.getElementById('xScore').innerHTML = XWins;
                    alert("X wygrał");
                    return true;
                }
                if (IsO) {
                    console.log('O wins');
                    OWins++;
                    document.getElementById('oScore').innerHTML = OWins;
                    alert("O wygrało");
                    return true;
                }
            }
        }
        Won = CheckWin();
    }
}

const reset = () => {
    document.getElementById('oScore').innerHTML = 0;
    OWins = 0;

    document.getElementById('xScore').innerHTML = 0;
    XWins = 0;

    player = 0;

    Won = false;
    for (let i = 0; i < Letters.length; i++) {
        for (let j = 0; j < Numbers.length; j++) {
            document.getElementById(Letters[i] + Numbers[j]).innerHTML = "";
        }
    }

}